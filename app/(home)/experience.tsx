"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Freelancer Full Stack Developer",
            company: "Grasp Gross",
            location: "Remote",
            period: "2023 - Present",
            type: "Full-time",
            description: "Develop a scalable web applications using Next.js, React, and Django. Worked with a team of developers and implemented best practices.",
            achievements: [
                "Architected and deployed production applications",
                "Improved application performance by 60%",
                "Worked under senior developers and participated in code reviews",
                "Wrote clean and maintainable code",
                "Primarily contributed to develop backend of the application",
            ],
            technologies: ["Next.js", "React", "Django", "PostgreSQL", "Docker"],
        },
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary font-mono">{"<"}</span>
                        Experience
                        <span className="text-primary font-mono">{" />"}</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline line for desktop */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-8"></div>

                                <div className="md:ml-16">
                                    <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card">
                                        <CardContent className="">
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                                                            <Briefcase className="w-6 h-6 text-primary" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                                                            <p className="text-primary font-semibold text-lg mb-2">{exp.company}</p>
                                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                                                                <span className="flex items-center gap-1">
                                                                    <Calendar className="w-4 h-4" />
                                                                    {exp.period}
                                                                </span>
                                                                <span className="flex items-center gap-1">
                                                                    <MapPin className="w-4 h-4" />
                                                                    {exp.location}
                                                                </span>
                                                                <Badge variant="outline" className="font-mono">
                                                                    {exp.type}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                                                    <div className="space-y-2 mb-4">
                                                        <p className="font-semibold text-sm">Key Achievements:</p>
                                                        {exp.achievements.map((achievement, i) => (
                                                            <div key={i} className="flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                                <p className="text-sm text-muted-foreground">{achievement}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-sm mb-2">Technologies:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, i) => (
                                                                <Badge key={i} variant="secondary" className="font-mono text-xs">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
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
