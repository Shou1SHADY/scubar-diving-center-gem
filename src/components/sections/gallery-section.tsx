"use client";

import Image from 'next/image';
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';

interface GallerySectionProps {
    isHomePage?: boolean;
}

export default function GallerySection({ isHomePage = false }: GallerySectionProps) {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  const imagesToDisplay = isHomePage ? galleryImages.slice(0, 4) : galleryImages;

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Moments We've Captured
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A glimpse into the breathtaking beauty of the underwater world waiting for you.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagesToDisplay.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={600}
                    className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={1200}
                  className="rounded-lg object-contain"
                  data-ai-hint={image.imageHint}
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {isHomePage && (
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/gallery">View Full Gallery</Link>
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}
