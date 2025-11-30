
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { equipment } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench } from "lucide-react";

interface EquipmentSectionProps {
    filter?: 'rentals' | 'sales';
}

function EquipmentCard({ item }: { item: (typeof equipment.rentals)[0] | (typeof equipment.sales)[0] }) {
    const itemImage = PlaceHolderImages.find(img => img.id === item.image);
    return (
        <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0">
                {itemImage && (
                    <Image
                        src={itemImage.imageUrl}
                        alt={item.name}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={itemImage.imageHint}
                    />
                )}
            </CardHeader>
            <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                 <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-primary" />
                        <span>{item.price}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full" variant="outline">
                    <Link href={`/contact?item=${item.id}`}>Inquire</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default function EquipmentSection({ filter }: EquipmentSectionProps) {

    const pageConfig = {
        all: {
            title: "Diving Equipment",
            description: "Whether you're looking to rent or buy, we have a full range of high-quality scuba gear."
        },
        rentals: {
            title: "Equipment Rentals",
            description: "High-quality, well-maintained scuba gear available for your next adventure."
        },
        sales: {
            title: "Equipment Sales",
            description: "Get the best gear from top brands. Our experts will help you find the perfect fit."
        }
    }

    const currentConfig = pageConfig[filter || 'all'];

    return (
        <section className="py-12 md:py-24 lg:py-32 bg-card">
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
                     <Tabs defaultValue="rentals" className="w-full mb-12">
                        <div className="flex justify-center">
                            <TabsList>
                                <TabsTrigger value="rentals">Rentals</TabsTrigger>
                                <TabsTrigger value="sales">For Sale</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="rentals">
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {equipment.rentals.map((item) => <EquipmentCard key={item.id} item={item} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="sales">
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {equipment.sales.map((item) => <EquipmentCard key={item.id} item={item} />)}
                            </div>
                        </TabsContent>
                    </Tabs>
                )}
               
                {filter === 'rentals' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.rentals.map((item) => <EquipmentCard key={item.id} item={item} />)}
                    </div>
                )}
                 {filter === 'sales' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.sales.map((item) => <EquipmentCard key={item.id} item={item} />)}
                    </div>
                )}
            </div>
        </section>
    );
}
