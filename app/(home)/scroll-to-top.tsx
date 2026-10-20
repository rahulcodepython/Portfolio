"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <Button aria-label="Scroll to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        size="icon"
                        className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
