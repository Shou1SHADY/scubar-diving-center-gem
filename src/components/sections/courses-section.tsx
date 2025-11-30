import Image from "next/image";
import Link from "next/link";
import { Clock, Tag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface CoursesSectionProps {
    isHomePage?: boolean;
}

export default function CoursesSection({ isHomePage = false }: CoursesSectionProps) {
    const coursesToDisplay = isHomePage ? courses.slice(0, 3) : courses;
    
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Find Your Next Adventure
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        From beginner certifications to professional-level training, we have a course for every diver.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesToDisplay.map((course) => {
                        const courseImage = PlaceHolderImages.find(img => img.id === course.image);
                        return (
                            <Card key={course.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                                <CardHeader className="p-0">
                                    {courseImage && (
                                        <Image
                                            src={courseImage.imageUrl}
                                            alt={course.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-48 object-cover"
                                            data-ai-hint={courseImage.imageHint}
                                        />
                                    )}
                                </CardHeader>
                                <CardContent className="flex-grow p-6">
                                    <CardTitle className="mb-2">{course.title}</CardTitle>
                                    <CardDescription>{course.description}</CardDescription>
                                    <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary" />
                                            <span>Duration: {course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Tag className="h-4 w-4 text-primary" />
                                            <span>Price: ${course.price}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button asChild className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">
                                        <Link href={`/booking?course=${course.id}`}>Book Now</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>

                {isHomePage && (
                    <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/courses">View All Courses</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}