"use client";

import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <SectionHeading title="Education" />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.degree}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "relative flex flex-col gap-8 items-center",
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 ring-4 ring-primary/20"></div>

                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card">
                                        <CardContent>
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                                                    <GraduationCap className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <Badge
                                                        variant={item.status === "Pursuing" ? "default" : "secondary"}
                                                        className="mb-2 font-mono"
                                                    >
                                                        {item.status}
                                                    </Badge>
                                                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                                                    <p className="text-primary font-semibold mb-2">{item.institution}</p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {item.period}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            {item.location}
                                                        </span>
                                                    </div>
                                                    <p className="text-muted-foreground mb-4">{item.description}</p>
                                                    <ul className="space-y-2">
                                                        {item.achievements.map((achievement) => (
                                                            <li key={achievement} className="flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                                                <span className="text-sm">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Empty space for timeline alignment */}
                                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
