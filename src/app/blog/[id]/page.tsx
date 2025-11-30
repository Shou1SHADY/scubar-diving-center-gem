
import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

// This data would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "The Silent World: Why We Need to Protect Our Oceans",
    date: "October 1, 2023",
    excerpt: "Our oceans are the lifeblood of our planet, but they're in trouble. Learn about the biggest threats to marine ecosystems and what you can do to help...",
    category: "Conservation",
    image: "blog-ocean-conservation",
    content: "<p>The ocean covers more than 70% of our planet's surface, playing a crucial role in regulating climate, producing oxygen, and supporting a vast array of life. However, this vital ecosystem is facing unprecedented threats from pollution, overfishing, and climate change. Plastic waste chokes marine animals, chemical runoff creates dead zones, and rising temperatures cause devastating coral bleaching.</p><p>Protecting our oceans is not just an environmental issue; it's a necessity for human survival. We rely on the ocean for food, livelihoods, and recreation. By making sustainable seafood choices, reducing our plastic consumption, and supporting conservation organizations, we can all contribute to preserving the silent world beneath the waves for future generations.</p>"
  },
  {
    id: 2,
    title: "Mastering Buoyancy: Tips from a Pro",
    date: "September 22, 2023",
    excerpt: "Perfect buoyancy is the key to effortless diving. We break down the essential techniques to help you float like a seasoned pro.",
    category: "Diving Tips",
    image: "blog-buoyancy-tips",
    content: "<p>Effortless buoyancy control is what separates novice divers from seasoned pros. It allows you to glide through the water with minimal effort, conserve air, and hover motionless to observe marine life without disturbing the environment. The key is in precise weight management and breath control.</p><p>Start by performing a proper weight check at the surface with an empty BCD. With a normal breath, you should float at eye level. As you exhale, you should slowly sink. Once underwater, use your lungs as your primary means of fine-tuning your buoyancy. Small inhalations will cause you to rise slightly, while exhalations will cause you to sink. Rely on your BCD only for major adjustments, such as at the beginning or end of your dive.</p>"
  },
  {
    id: 3,
    title: "A Diver's Guide to Underwater Photography",
    date: "September 15, 2023",
    excerpt: "Want to capture the magic of the underwater world? Our lead photographer shares her secrets for stunning shots, from gear selection to composition.",
    category: "How-To",
    image: "blog-uw-photography",
    content: "<p>Underwater photography presents a unique set of challenges, but the rewards are immense. The first step is getting comfortable with your dive gear before introducing a camera. Once you're a confident diver, you can start thinking about your photo equipment.</p><p>For beginners, a simple action camera in a waterproof housing can produce great results. As you advance, you might consider a dedicated underwater camera with external strobes. Remember that water absorbs light and color, so getting close to your subject is crucial. Use strobes to restore the vibrant reds and yellows that are lost at depth. Finally, focus on composition: shoot upwards to create dramatic silhouettes and fill the frame with your subject to create impactful images.</p>"
  }
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(img => img.id === post.image);

  return (
    <div className="bg-background">
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-4xl">
           <div 
              className="space-y-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards', opacity: 0 }}
            >
             <Button asChild variant="ghost" className="pl-0">
                <Link href="/blog" className="flex items-center gap-2 text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
            <p className="text-sm text-primary font-semibold">{post.category}</p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>

          {postImage && (
            <div 
              className="mb-8 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards', opacity: 0 }}
            >
              <Image
                src={postImage.imageUrl}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full rounded-lg object-cover aspect-video shadow-lg"
                data-ai-hint={postImage.imageHint}
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article className="lg:col-span-8">
              <div 
                className="prose prose-lg max-w-none text-foreground prose-p:text-foreground/80 prose-headings:text-foreground animate-fade-in-up"
                style={{ animationDelay: '500ms', animationFillMode: 'forwards', opacity: 0 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <aside 
              className="lg:col-span-4 space-y-8 animate-fade-in-up"
              style={{ animationDelay: '700ms', animationFillMode: 'forwards', opacity: 0 }}
            >
                <Card className="bg-card">
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tighter mb-4">Explore More</h3>
                    <p className="text-muted-foreground mb-6">
                      Ready for your own adventure? Check out our courses and book your next dive.
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button asChild className="w-full">
                        <Link href="/courses">View Courses</Link>
                      </Button>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/booking">Book a Dive</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}
