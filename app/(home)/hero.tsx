"use client";

import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/ui/hyper-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { profile, socials } from "@/lib/data";
import { motion } from "motion/react";
import { Code2, Download, Mail, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-24 pb-16">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-60 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Soft colour glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

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
                            <motion.div
                                className="absolute -inset-1 rounded-full bg-linear-to-r from-primary via-purple-500 to-primary"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background">
                                <img
                                    src={profile.image}
                                    alt={`${profile.name} - ${profile.role}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Freelance availability */}
                    {profile.openToFreelance && (
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6 text-sm font-medium text-green-700 dark:text-green-400 hover:bg-green-500/15 transition-colors"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                            </span>
                            Open to freelance work
                        </motion.a>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-4 flex justify-center"
                    >
                        <HyperText
                            as="h1"
                            delay={400}
                            duration={1200}
                            className="py-0 pb-2 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent cursor-default"
                            style={{
                                backgroundSize: "200% auto",
                                animation: "gradient 4s linear infinite",
                            }}
                        >
                            {profile.name}
                        </HyperText>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 font-mono"
                    >
                        <span className="text-primary">role</span> :={" "}
                        <span className="text-green-600 dark:text-green-500">
                            "<TypingAnimation
                                delay={900}
                                duration={70}
                                cursorStyle="line"
                                className="leading-normal tracking-normal"
                            >
                                {profile.role}
                            </TypingAnimation>"
                        </span>;
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-3"
                    >
                        {profile.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-8"
                    >
                        <MapPin className="w-4 h-4 text-primary" />
                        {profile.location}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-3 justify-center mb-10"
                    >
                        <Button size="lg" className="rounded-full shadow-lg shadow-primary/25" asChild>
                            <a href="#projects">
                                <Code2 className="h-4 w-4" />
                                View Projects
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full" asChild>
                            <a href="#contact">
                                <Mail className="h-4 w-4" />
                                Get In Touch
                            </a>
                        </Button>
                        {profile.cvUrl && (
                            <Button size="lg" variant="outline" className="rounded-full" asChild>
                                <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
                                    <Download className="h-4 w-4" />
                                    Get CV
                                </a>
                            </Button>
                        )}
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                aria-label="Scroll to about section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2"
                >
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                </motion.div>
            </motion.a>
        </section>
    );
}
