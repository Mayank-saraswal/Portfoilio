import { Header } from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe, Dna, Activity, Search, ShieldCheck, Database, Server, Smartphone, Lock } from "lucide-react";

export default function VariantXProject() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Header />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link */}
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                    </Link>

                    {/* Hero Section */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Research Tool</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">VariantX</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                An AI-powered application that helps researchers and clinicians interpret DNA mutations efficiently. Fast, reliable, and backed by clinical data.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://variant-x.vercel.app/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Globe className="w-5 h-5" /> Visit Website
                                </Link>
                                <span className="inline-flex items-center gap-2 bg-secondary/50 text-muted-foreground border border-border px-6 py-3 rounded-xl font-bold cursor-not-allowed">
                                    <Lock className="w-4 h-4" /> Closed Source
                                </span>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                            <Image
                                src="/variantx.png"
                                alt="VariantX Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Content Column */}
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                    <Activity className="w-6 h-6 text-red-500" /> The Problem & Solution
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                    <p>
                                        DNA mutations can range from harmless changes to causes of serious diseases like breast cancer.
                                        Analyzing these manually is time-consuming and requires specialized expertise.
                                    </p>
                                    <p className="mt-4">
                                        <strong>VariantX</strong> uses Artificial Intelligence to instantly analyze mutations and answer three key questions:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Is this mutation harmful or harmless?</li>
                                        <li>How confident is the AI in this result?</li>
                                        <li>Has this mutation been seen in medical records (ClinVar)?</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                    <Dna className="w-6 h-6 text-blue-500" /> How It Works
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Search Gene", desc: "User searches for a gene (e.g., BRCA1).", icon: Search },
                                        { title: "Enter Mutation", desc: "User inputs the specific DNA change.", icon: Dna },
                                        { title: "AI Analysis", desc: "Deep learning model predicts impact.", icon: Server },
                                        { title: "Instant Results", desc: "Get safety status & confidence score.", icon: ShieldCheck },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                                            <div className="p-2 bg-background rounded-lg h-fit">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                    <Database className="w-6 h-6 text-purple-500" /> Data Sources
                                </h2>
                                <div className="p-6 bg-card border border-border rounded-2xl">
                                    <p className="text-muted-foreground mb-4">
                                        VariantX relies on trusted scientific data to ensure accuracy and reliability.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                            <div>
                                                <strong className="text-foreground">ClinVar (NCBI):</strong>
                                                <span className="text-muted-foreground block text-sm">A medical database with real patient records to valid AI predictions against clinical evidence.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                                            <div>
                                                <strong className="text-foreground">UCSC Genome Browser:</strong>
                                                <span className="text-muted-foreground block text-sm">Provides reference human DNA sequences to pinpoint gene and mutation locations accurately.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Tech Stack Column */}
                        <div>
                            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Server className="w-5 h-5 text-green-500" /> Tech Stack
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Frontend</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Next.js</Badge>
                                            <Badge>TypeScript</Badge>
                                            <Badge>Tailwind CSS</Badge>
                                            <Badge>shadcn/ui</Badge>
                                            <Badge>TanStack Query</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Backend</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Python</Badge>
                                            <Badge>FastAPI</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Infrastructure</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Cloud Servers</Badge>
                                            <Badge>Vercel</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            {children}
        </span>
    );
}
