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
                            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
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
                            src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
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
