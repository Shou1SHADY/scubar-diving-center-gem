"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NavItem, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
          <NavigationMenu>
            <NavigationMenuList>
              {siteConfig.navLinks.map((link) =>
                link.children ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {link.children.map((child) => (
                          <ListItem
                            key={child.label}
                            title={child.label}
                            href={child.href}
                          >
                            {child.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} passHref>
                      <NavigationMenuLink active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
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
                <Accordion type="multiple" className="w-full">
                  {siteConfig.navLinks.map((link) =>
                    link.children ? (
                      <AccordionItem value={link.label} key={link.label}>
                        <AccordionTrigger className="py-2 capitalize text-base font-medium">
                          {link.label}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          <div className="flex flex-col space-y-3 mt-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "transition-colors hover:text-foreground",
                                  pathname === child.href ? "text-foreground font-semibold" : "text-foreground/60"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center py-2 text-base font-medium transition-colors hover:text-foreground",
                          pathname === link.href ? "text-foreground font-semibold" : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </Accordion>
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
