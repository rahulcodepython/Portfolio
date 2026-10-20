"use client";

import { navigation, profile, socials } from "@/lib/data";
import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-card/50 backdrop-blur">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Code2 className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold">{profile.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Full Stack Developer building fast, production-ready web apps.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="grid grid-cols-2 gap-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Get In Touch</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                <span className="text-primary font-medium">Email:</span>{" "}
                                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors break-all">
                                    {profile.email}
                                </a>
                            </p>
                            <p>
                                <span className="text-primary font-medium">Location:</span> {profile.location}
                            </p>
                            {profile.openToFreelance && (
                                <p>
                                    <span className="text-primary font-medium">Status:</span>{" "}
                                    <span className="text-green-600 dark:text-green-500">Open to freelance work</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                            © {currentYear} {profile.name}. Made with{" "}
                            <Heart className="w-4 h-4 text-red-500 fill-current" /> and{" "}
                            <Code2 className="w-4 h-4 text-primary" />
                        </p>
                        <p className="font-mono text-xs">
                            <span className="text-purple-500">//</span> Built with Next.js, TypeScript & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
