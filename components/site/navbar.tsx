"use client";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Code2, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the nav link of the section currently in view
    useEffect(() => {
        const sections = navigation
            .map((item) => document.getElementById(item.href.slice(1)))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
            )}
        >
            <nav className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
                <a href="#home" className="flex items-center gap-2 font-bold text-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                    <span>{profile.name}</span>
                </a>

                <div className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                                active === item.href.slice(1)
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button asChild size="sm" className="hidden sm:inline-flex rounded-full">
                        <a href="#contact">Hire Me</a>
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="lg:hidden rounded-full" aria-label="Open menu">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72" aria-describedby={undefined}>
                            <SheetTitle className="px-4 pt-4 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-primary" />
                                {profile.name}
                            </SheetTitle>
                            <div className="flex flex-col gap-1 px-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                            active === item.href.slice(1)
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <Button asChild className="mt-4 rounded-full">
                                    <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
