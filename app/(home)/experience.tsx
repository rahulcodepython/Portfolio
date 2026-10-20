"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/lib/data";
import { motion } from "motion/react";
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-5xl">
                <SectionHeading
                    title="Experience"
                    subtitle="Where I've been building real products for real users."
                />

                <div className="relative">
                    {/* Timeline line for desktop */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-primary/20 to-transparent"></div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${exp.title}`}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-8 ring-4 ring-primary/20"></div>

                                <div className="md:ml-16">
                                    <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card">
                                        <CardContent>
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                                                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                                                    <Briefcase className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                                                        <Badge className="font-mono">{exp.type}</Badge>
                                                    </div>
                                                    {exp.companyUrl ? (
                                                        <a
                                                            href={exp.companyUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary font-semibold text-lg hover:underline"
                                                        >
                                                            {exp.company}
                                                        </a>
                                                    ) : (
                                                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                                                    )}
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {exp.period}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground mb-4">{exp.description}</p>

                                            <ul className="space-y-2 mb-5">
                                                {exp.achievements.map((achievement) => (
                                                    <li key={achievement} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                                        <span className="text-sm text-muted-foreground">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <Badge key={tech} variant="secondary" className="font-mono text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                {exp.links && (
                                                    <div className="flex flex-wrap gap-3">
                                                        {exp.links.map((link) => (
                                                            <a
                                                                key={link.href}
                                                                href={link.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                                            >
                                                                {link.label}
                                                                <ExternalLink className="w-3.5 h-3.5" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
