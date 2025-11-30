
import { Newspaper, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Silent World: Why We Need to Protect Our Oceans",
    date: "October 1, 2023",
    excerpt: "Our oceans are the lifeblood of our planet, but they're in trouble. Learn about the biggest threats to marine ecosystems and what you can do to help...",
    category: "Conservation"
  },
  {
    id: 2,
    title: "Mastering Buoyancy: Tips from a Pro",
    date: "September 22, 2023",
    excerpt: "Perfect buoyancy is the key to effortless diving. We break down the essential techniques to help you float like a seasoned pro.",
    category: "Diving Tips"
  },
  {
    id: 3,
    title: "A Diver's Guide to Underwater Photography",
    date: "September 15, 2023",
    excerpt: "Want to capture the magic of the underwater world? Our lead photographer shares her secrets for stunning shots, from gear selection to composition.",
    category: "How-To"
  }
];


export default function BlogPage() {
  return (
    <div className="bg-card">
      <div className="container py-12 md:py-24">
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dive Log & News
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stories from the deep, conservation news, and diving tips from our experts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
             <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <p className="text-sm text-primary font-semibold">{post.category}</p>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">More Posts Coming Soon!</h3>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                We're always exploring and learning. Subscribe to our newsletter to get the latest articles and news delivered straight to your inbox.
            </p>
        </div>

      </div>
    </div>
  );
}
