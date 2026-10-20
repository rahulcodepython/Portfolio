"use client";

import { motion } from "motion/react";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="text-primary font-mono">{"<"}</span>
                {title}
                <span className="text-primary font-mono ml-3">{"/>"}</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            {subtitle && (
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </motion.div>
    );
}
