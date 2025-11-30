import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

    return (
        <section className="relative h-[80vh] sm:h-[calc(100vh-4rem)] w-full">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white">
                        Discover the World Beneath
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
                        Your ultimate adventure starts here. Explore vibrant coral reefs, mysterious shipwrecks, and the incredible biodiversity of the ocean.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/booking">Book a Dive</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90">
                            <Link href="/courses">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
