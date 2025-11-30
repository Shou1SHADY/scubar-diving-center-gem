
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { trips } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TripsSectionProps {
    filter?: 'local' | 'international';
}

function TripCard({ trip }: { trip: (typeof trips)[0] }) {
    const tripImage = PlaceHolderImages.find(img => img.id === trip.image);
    return (
        <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0">
                {tripImage && (
                    <Image
                        src={tripImage.imageUrl}
                        alt={trip.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={tripImage.imageHint}
                    />
                )}
            </CardHeader>
            <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">{trip.title}</CardTitle>
                <CardDescription>{trip.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/booking?trip=${trip.id}`}>Book This Trip</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default function TripsSection({ filter }: TripsSectionProps) {
    const filteredTrips = filter ? trips.filter(trip => trip.type === filter) : trips;

    const pageConfig = {
        all: {
            title: "Diving Trips",
            description: "From local treasures to international wonders, your next diving adventure starts here."
        },
        local: {
            title: "Local Diving Trips",
            description: "Discover the hidden gems in our own backyard. We offer regular trips to the best local dive sites."
        },
        international: {
            title: "International Diving Trips",
            description: "Explore the most breathtaking dive sites around the globe with our expert-led expeditions."
        }
    }

    const currentConfig = pageConfig[filter || 'all'];

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {currentConfig.title}
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        {currentConfig.description}
                    </p>
                </div>
                
                {!filter && (
                     <Tabs defaultValue="all" className="w-full mb-12">
                        <div className="flex justify-center">
                            <TabsList>
                                <TabsTrigger value="all">All Trips</TabsTrigger>
                                <TabsTrigger value="local">Local</TabsTrigger>
                                <TabsTrigger value="international">International</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="all">
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {trips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="local">
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {trips.filter(t => t.type === 'local').map((trip) => <TripCard key={trip.id} trip={trip} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="international">
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {trips.filter(t => t.type === 'international').map((trip) => <TripCard key={trip.id} trip={trip} />)}
                            </div>
                        </TabsContent>
                    </Tabs>
                )}
               
                {filter && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
                    </div>
                )}
            </div>
        </section>
    );
}
