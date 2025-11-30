
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { collection } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import { courses } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useAuth, useFirebase, useUser, initiateAnonymousSignIn, addDocumentNonBlocking } from "@/firebase";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  service: z.string().min(1, "Please select a course."),
  divers: z.coerce.number().min(1, "At least one diver is required."),
  date: z.date({
    required_error: "A date for your dive is required.",
  }),
});

type BookingFormValues = z.infer<typeof formSchema>;

export default function BookingForm() {
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get('course') || '';
  
  const { firestore } = useFirebase();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<{ service: string; date: string }>({ service: '', date: '' });

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: defaultCourse,
      divers: 1,
      date: undefined,
    },
  });
  
  useEffect(() => {
    if (!isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [isUserLoading, user, auth]);

  async function onSubmit(values: BookingFormValues) {
    if (!user) {
      console.error("User not signed in to submit booking.");
      // Optionally show an error to the user
      return;
    }

    setIsLoading(true);

    const newBooking = {
      ...values,
      creatorId: user.uid,
      date: values.date.toISOString(),
    };

    try {
      const bookingsColRef = collection(firestore, 'bookings');
      await addDocumentNonBlocking(bookingsColRef, newBooking);
      
      const courseTitle = courses.find(c => c.id === values.service)?.title || values.service;
      setBookingDetails({ service: courseTitle, date: format(values.date, "PPP") });
      setShowSuccessDialog(true);
      form.reset();
      form.setValue('service', defaultCourse);

    } catch (error) {
      console.error("Error submitting booking:", error);
      // Handle error state, maybe show a toast
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Calendar
              mode="single"
              selected={form.watch('date')}
              onSelect={(date) => form.setValue('date', date as Date)}
              disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
              className="rounded-lg border hidden md:block"
            />
        </div>
        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:hidden">
                    <FormLabel>Selected Date</FormLabel>
                     <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                             date < new Date(new Date().setDate(new Date().getDate() - 1))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course / Service</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course or service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courses.map(course => (
                          <SelectItem key={course.id} value={course.id}>{course.title}</SelectItem>
                        ))}
                        <SelectItem value="equipment-rental">Equipment Rental</SelectItem>
                        <SelectItem value="guided-tour">Guided Tour</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="divers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Divers</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={isLoading || isUserLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Booking Request"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Booking Request Sent!</AlertDialogTitle>
            <AlertDialogDescription>
              We've received your request for <span className="font-semibold text-primary">{bookingDetails.service}</span> on <span className="font-semibold text-primary">{bookingDetails.date}</span>. We will email you shortly to confirm availability and finalize your booking.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessDialog(false)}>
              Got it!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
