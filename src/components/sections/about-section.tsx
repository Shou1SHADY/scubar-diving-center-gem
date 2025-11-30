import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface AboutSectionProps {
  isHomePage?: boolean;
}

export default function AboutSection({ isHomePage = false }: AboutSectionProps) {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-mission');

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'PADI 5-Star Center',
      description: 'Recognized for our commitment to diver education and safety.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Expert Instructors',
      description: 'Our team of certified professionals is passionate about sharing the underwater world.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Safety First',
      description: 'We adhere to the highest safety standards to ensure a secure and enjoyable experience.',
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Trusted Partner in Underwater Exploration
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Neptune Dive, our mission is to provide safe, exciting, and environmentally responsible diving adventures. We believe in sharing the magic of the ocean while actively working to protect it for future generations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(0, isHomePage ? 2 : 3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div>{feature.icon}</div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {isHomePage && (
              <Button asChild className="mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            )}
          </div>
          <div className="animate-fade-in">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
        {!isHomePage && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Story</h3>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Founded in 2005 by a group of passionate marine biologists and dive enthusiasts, Neptune Dive started as a small operation with a big dream: to create a community centered around the love for the ocean. Over the years, we've grown into a leading dive center, but our core values remain the same. We're dedicated to conservation, education, and creating unforgettable memories for every diver who joins us.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
