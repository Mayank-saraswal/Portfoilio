import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Blogs() {
    return (
        <section className="mb-24" id="blogs">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 block">Featured</span>
            <h2 className="text-2xl font-display font-bold mb-10">Blogs</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Blog 1 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-4 relative">
                        <Image
                            alt="Blog 1"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oqLm0-Id4pVCo0dXGBppz3AvaDLYh3V5_tKt-ir8Tn1hwe-Fn3L0-8jzEZTN4jUSKXCV4hC6H1mNqzSdxG_Nl5sARAGSU2fkbpUcRpJ_pQrizrIK5Pw-rEYSirMOSHlg8MrR-YXkeOsqOPUhgfEVq6FzzljnJ2Z7e2ZCUf7N-9izeexQFcnqYXjny5nHunlTCZ1Ee1z7AfE0cpkPbeTj5NFwn5uzslzLx4QMclwPi9DN7PC7k0h1h2qSpomZHuZu7Ealimp6kqSx"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">How to optimise a Next.js web app</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">Optimise your Next.js web app to make it lightning fast! Learn about SSR, SSG and ISR.</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>January 30, 2024</span>
                        <span className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>

                {/* Blog 2 */}
                <div className="group cursor-pointer">
                    <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-4 relative">
                        <Image
                            alt="Blog 2"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbsWxzq0WuQJtwlk3cGmw-GovtNwwfFONU5Fv5r1RqwmxxdSJ4VTScDQFd7YWW2kqgRnCSLG-We2nzahpOUum-c9usY0E2jHPPKsHurCewPI_9IzkO6MycKB1sPXgvFQtgWuFVLTWAdVdqFA9aKfSJaueYDrnvdrUGGVDdBLgSJihvRePUxpLYbzi09VR6aBYiOltHDDUTIGXFjV13yOJ54awmR8RBx9-dz6mwx1sgohDbcyjnK1ZF44hl5AzSAOZILl8opk5C9zoX"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">What is taste and how can you develop it?</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">Understanding what is taste, resources and how to practice design everyday.</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>December 6, 2023</span>
                        <span className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>

            <button className="mt-12 w-full py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                Show all blogs
            </button>
        </section>
    );
}
