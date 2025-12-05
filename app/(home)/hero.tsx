"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "@/lib/database/schema";
import { motion } from "framer-motion";
import { Code2, Download, Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero({ settings }: { settings: Settings }) {
    const socialLinks = [
        { icon: Github, href: settings.github_url, label: "GitHub" },
        { icon: Linkedin, href: settings.linkedin_url, label: "LinkedIn" },
        { icon: Twitter, href: settings.twitter_url, label: "Twitter" },
        { icon: Facebook, href: settings.facebook_url, label: "Facebook" },
        { icon: Instagram, href: settings.instagram_url, label: "Instagram" },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Animated Background Grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            >

            </div>

            {/* Terminal-like animated lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-linear-to-r from-transparent via-primary to-transparent"
                        initial={{ x: "-100%", y: i * 150 }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                        }}
                        style={{ width: "50%" }}
                    />
                ))}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative">
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-purple-500 to-primary"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ padding: "4px" }}
                            />
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background">
                                <img
                                    src={settings?.image_url ?? "/01.jpg"}
                                    alt="Rahul Das - Full Stack Developer"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <span className="text-sm font-mono text-primary">
                            {"<"}<span className="text-foreground">Hello Viewer</span>{" />"}
                        </span>
                    </motion.div>

                    {/* Main heading with typing effect look */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent"
                        style={{
                            backgroundSize: '200% auto',
                            animation: 'gradient 3s linear infinite'
                        }}
                    >
                        Rahul Das
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-2 font-mono"
                    >
                        <span className="text-primary">role</span> :={" "}
                        <span className="text-green-500">"Full Stack Developer"</span>;
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-mono"
                    >
                        <span className="text-purple-500">{"// "}</span>
                        Crafting elegant solutions with Next.js, Django, Fiber & Docker
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <Button
                            size="lg"
                            className="rounded-full font-mono"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Code2 className="h-4 w-4" />
                            View Projects
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full font-mono"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Mail className="h-4 w-4" />
                            Get In Touch
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full font-mono"
                            onClick={() => window.open(settings?.cv_url ?? "", "_blank")}
                        >
                            <Download className="h-4 w-4" />
                            Get CV
                        </Button>
                    </motion.div>

                    {/* Social Links */}
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

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2"
                >
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}