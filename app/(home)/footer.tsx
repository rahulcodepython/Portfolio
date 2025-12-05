"use client";

import { Settings } from "@/lib/database/schema";
import { motion } from "framer-motion";
import { Code2, Facebook, Github, Heart, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer({ settings }: { settings: Settings }) {
    const currentYear = new Date().getFullYear();

    const navigation = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: Github, href: settings.github_url, label: "GitHub" },
        { icon: Linkedin, href: settings.linkedin_url, label: "LinkedIn" },
        { icon: Twitter, href: settings.twitter_url, label: "Twitter" },
        { icon: Facebook, href: settings.facebook_url, label: "Facebook" },
        { icon: Instagram, href: settings.instagram_url, label: "Instagram" },
    ];

    return (
        <footer className="border-t border-border bg-card/50 backdrop-blur">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Code2 className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold">Rahul Das</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">
                            Full Stack Developer specializing in building exceptional digital experiences.
                        </p>
                        <div className="flex gap-3">
                            {/* {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))} */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex gap-4 justify-center"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href ?? ""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </motion.div>
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
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
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
                            <p className="font-mono">
                                <span className="text-primary">Email:</span>{" "}
                                <a
                                    className="hover:text-primary transition-colors"
                                >
                                    rahulcodepython@gmail.com
                                </a>
                            </p>
                            <p className="font-mono">
                                <span className="text-primary">Location:</span> India
                            </p>
                            <p className="font-mono">
                                <span className="text-primary">Status:</span>{" "}
                                <span className="text-green-500">Available for work</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p className="font-mono flex items-center gap-2">
                            © {currentYear} Rahul Das. Made with{" "}
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
