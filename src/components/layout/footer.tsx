"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../logo";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
        toast({
            variant: "destructive",
            title: "Uh oh!",
            description: "Please enter your email address.",
        });
        return;
    }
    console.log("Newsletter subscription for:", email);
    toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to our newsletter.",
    });
    setEmail("");
  };


  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="flex space-x-4">
              <Link href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.socialLinks.twitter} target="_blank" rel="noreferrer">
                 <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {siteConfig.footerNavLinks.map((nav) => (
            <div key={nav.title}>
              <h3 className="text-lg font-semibold font-headline">{nav.title}</h3>
              <ul className="mt-4 space-y-2">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold font-headline">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="mt-4 flex w-full max-w-sm items-center space-x-2" onSubmit={handleNewsletterSubmit}>
              <Input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
