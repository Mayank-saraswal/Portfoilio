"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function ClickFireworks() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            confetti({
                origin: { x, y },
                particleCount: 40,
                spread: 70,
                startVelocity: 30,
                gravity: 0.8,
                ticks: 200,
                colors: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"],
                disableForReducedMotion: true,
                zIndex: 9999,
            });
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return null;
}
