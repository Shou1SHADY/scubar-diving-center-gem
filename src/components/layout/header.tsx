"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Waves } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../logo";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setOpen(false)}
                    >
                        <Logo className="h-6 w-6 mr-2 text-primary" />
                        <span className="font-bold font-headline">{siteConfig.name}</span>
                    </Link>
                    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                        <div className="flex flex-col space-y-3">
                        {siteConfig.navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                    "transition-colors hover:text-foreground",
                                    pathname === link.href ? "text-foreground font-semibold" : "text-foreground/60"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center space-x-2 md:hidden">
                <Logo className="h-5 w-5 text-primary" />
                <span className="font-bold text-sm font-headline">{siteConfig.name}</span>
            </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/contact">{siteConfig.contact.phone}</Link>
            </Button>
            <Button asChild>
                <Link href="/booking">Book a Dive</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
