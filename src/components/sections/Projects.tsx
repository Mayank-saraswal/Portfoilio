import { ArrowRight, Globe, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
    return (
        <section className="mb-24" id="projects">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 block">Featured</span>
            <h2 className="text-2xl font-display font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Project 0: Moris */}
                <div className="group border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 bg-card hover:-translate-y-1 cursor-pointer">
                    <Link href="/projects/moris">
                        <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                            <Image
                                alt="Moris IDE"
                                src="/moris.png"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                    </Link>
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex justify-between items-start mb-4">
                            <Link href="/projects/moris" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold">Moris IDE</h3>
                            </Link>
                            <div className="flex gap-2">
                                <Link href="https://moris-ide.vercel.app" target="_blank" title="Visit Web App">
                                    <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                                </Link>
                                <Link href="https://github.com/Mayank-saraswal/moris" target="_blank" title="View Source">
                                    <Terminal className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                            An open-source, AI-powered IDE with an embedded agent, CodeMirror 6, and in-browser execution through WebContainers.
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Live</span>
                            </div>
                            <Link href="/projects/moris" className="text-sm font-bold group-hover:text-primary transition-colors flex items-center gap-1">
                                View Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Project 1: NodeBase */}
                <div className="group border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 bg-card hover:-translate-y-1 cursor-pointer">
                    <Link href="/projects/nodebase">
                        <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                            <Image
                                alt="NodeBase"
                                src="/nodebase.png"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                    </Link>
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex justify-between items-start mb-4">
                            <Link href="/projects/nodebase" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold">NodeBase</h3>
                            </Link>
                            <div className="flex gap-2">
                                <Link href="https://www.nodebase.tech/" target="_blank" title="Visit Website">
                                    <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                            An AI automation tool designed to streamline and orchestrate complex AI workflows with ease.
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Live</span>
                            </div>
                            <Link href="/projects/nodebase" className="text-sm font-bold group-hover:text-primary transition-colors flex items-center gap-1">
                                View Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project 2: VariantX */}
                <div className="group border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 bg-card hover:-translate-y-1 cursor-pointer">
                    <Link href="/projects/variantx">
                        <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                            <Image
                                alt="VariantX"
                                src="/variantx.png"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                        </div>
                    </Link>
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex justify-between items-start mb-4">
                            <Link href="/projects/variantx" className="hover:text-primary transition-colors">
                                <h3 className="text-xl font-bold">VariantX</h3>
                            </Link>
                            <div className="flex gap-2">
                                <Link href="https://variant-x.vercel.app/" target="_blank" title="Visit Website">
                                    <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                            A specialized biotech application for in-depth analysis and visualization of DNA mutations using AI.
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Live</span>
                            </div>
                            <Link href="/projects/variantx" className="text-sm font-bold group-hover:text-primary transition-colors flex items-center gap-1">
                                View Details <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-12 w-full py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                Show all projects
            </button>
        </section>
    );
}
