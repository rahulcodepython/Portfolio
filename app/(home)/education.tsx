"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Computer Application",
            institution: "Brainware University",
            location: "India",
            period: "2023 - 2026",
            description: "Focused on software development, algorithms, data structures, and web technologies.",
            achievements: [
                "CGPA: 8.9/10",
                "Volunterly Participated in collage tech fest",
                "Secure second position at coding competition",
                "Hunting knowledge along with maintaining good academic record",
            ],
        },
        {
            degree: "Higher Secondary Education",
            institution: "Kalyangarh Vidyamandir (H.S)",
            location: "India",
            period: " 2021 - 2023",
            description: "Specialized in Science with Computer Science",
            achievements: [
                "Percentage: 82%",
                "School ranker in Computer Science",
                "Started web development journey",
            ],
        },
        {
            degree: "Secondary Education",
            institution: "Kalyangarh Bidhan Chandra Vidyapith (H.S)",
            location: "India",
            period: " 2015 - 2021",
            description: "Focused on studies.",
            achievements: [
                "Percentage: 92%",
                "Consistently hold top position in class for 6 continuous years",
                "Developed interest in science and programming",
                "Achieved first position in inter school chess competition",
            ],
        },
    ];

    return (
        <section id="education" className="py-20 px-4 bg-muted/30">
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
                        Education
                        <span className="text-primary font-mono">{" />"}</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                                {/* Content card */}
                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card">
                                        <CardContent className="">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                                                    <GraduationCap className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
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
                                                    <div className="space-y-2">
                                                        {item.achievements.map((achievement, i) => (
                                                            <div key={i} className="flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                                                <p className="text-sm">{achievement}</p>
                                                            </div>
                                                        ))}
                                                    </div>
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
