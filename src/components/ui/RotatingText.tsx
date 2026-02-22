"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotatingText({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words]);

    return (
        <span className="inline-grid grid-cols-1 grid-rows-1 text-left align-top">
            <span className="invisible col-start-1 row-start-1 pointer-events-none opacity-0">
                {/* Render the longest word to reserve width, or just current. 
            To avoid layout shift, often better to maximize width or animate width.
            For now, let's just let it resize naturally. */}
                {words.sort((a, b) => b.length - a.length)[0]}
            </span>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                    className="col-start-1 row-start-1 text-muted-foreground whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
