import BookingForm from "./booking-form";

export default function BookingPage() {
  return (
    <div className="container py-12 md:py-24">
        <div className="text-center space-y-3 mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Dive
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Select a date, choose your course, and get ready for an unforgettable adventure.
            </p>
        </div>
        <BookingForm />
    </div>
  );
}
