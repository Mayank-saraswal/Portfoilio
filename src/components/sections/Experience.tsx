import { ArrowRight, Building2, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Experience() {
    return (
        <section className="mb-24" id="work">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 block">Featured</span>
            <h2 className="text-2xl font-display font-bold mb-10">Experience</h2>

            <div className="space-y-12">
                {/* Experience Item 1 */}
                <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-white dark:ring-black"></div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-6 h-6 relative">
                                    <Image
                                        alt="Company Logo"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPH3dAaQUnWclMWgvTU0OVQyW31HUbigqud1PsdXzFKEe08OJMdU1QxoOPPCUatDdgMxNArprOeHDzdaSdDKxCLzexRJ5orl-zAE1935sDQzyNOhBkhejmaBlPZCwuRny14AO2nhCgpi4Gcm66A9V0UtD_tcgV9dZgproUld3DkYuyyq2GiQpJQqtSJWf8QYzDL8-Ta8PyXmtu-LT1loAxKlnMOeMKTVXixY_k1oUyYYkGnTiRExzUfgEsQYXfkYtYLkiu4mH1Czz0"
                                        fill
                                        className="object-contain dark:invert"
                                    />
                                </div>
                                <h3 className="text-lg font-bold">Founding Frontend Engineer</h3>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Working</span>
                            </div>
                            <p className="text-slate-500 text-sm">United States (Remote)</p>
                        </div>
                        <span className="text-sm text-slate-400 font-medium">August 2025 - Present</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Next.js", "Tailwind CSS", "TypeScript", "Figma", "Vercel"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3 list-disc ml-4 leading-relaxed">
                        <li>Architected and developed the complete frontend infrastructure for the platform.</li>
                        <li>Led a comprehensive codebase refactoring initiative that improved maintainability and scalability.</li>
                        <li>Integrated and optimized backend API connections, implementing efficient data fetching.</li>
                        <li>Enhanced user experience and interface design through implementation of consistent design systems.</li>
                    </ul>
                </div>

                {/* Experience Item 2 */}
                <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 p-4 -mx-4 rounded-2xl transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold">Backend Developer Intern</h3>
                            <span className="text-xs text-slate-400">June 2023 - July 2023</span>
                        </div>
                        <p className="text-sm text-slate-500">Upsurge Labs · Bangalore, India</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </div>
            </div>

            <button className="mt-12 w-full py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                Show all work experiences
            </button>
        </section>
    );
}
