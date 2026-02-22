"use client";

import Link from "next/link";
import { Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
    const { setTheme, theme } = useTheme();

    return (
        <header className="fixed top-0 left-30 right-30 z-10 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
            {/* Logo / Avatar */}
            <Link href="/" className="flex items-center gap-2">
                <div className="relative w-15 h-15 overflow-hidden rounded-lg bg-yellow-400 border-2 border-yellow-500">
                    <Image
                        alt="Logo"
                        src="https://unavatar.io/twitter/MayankSaraswal"
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
                <Link href="#work" className="hover:text-foreground transition-colors">Work</Link>
                <Link href="#blogs" className="hover:text-foreground transition-colors">Blogs</Link>
                <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-secondary text-xs text-muted-foreground hover:bg-secondary transition-colors">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                    <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">Ctrl + K</span>
                    </kbd>
                </button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="rounded-full w-9 h-9"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
    );
}
