import { Header } from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Globe, GitCommit, Calendar, CheckCircle2, Zap, Layout, Database } from "lucide-react";
import { getLatestCommit } from "@/lib/github";
import { formatDistanceToNow } from "date-fns";

export default async function MorisProject() {
    const latestCommit = await getLatestCommit("Mayank-saraswal/moris");

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
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-sm font-bold text-green-500 uppercase tracking-wider">Open Source Project</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Moris IDE</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                An open-source, AI-powered IDE featuring an embedded agent, in-browser code execution, live document scraping, and real-time synchronization.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://moris-ide.vercel.app"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Globe className="w-5 h-5" /> Visit App
                                </Link>
                                <Link
                                    href="https://github.com/Mayank-saraswal/moris"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground border border-border px-6 py-3 rounded-xl font-bold hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Github className="w-5 h-5" /> View Source
                                </Link>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                            <Image
                                src="/moris.png"
                                alt="Moris IDE Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* GitHub Stats */}
                    {latestCommit && (
                        <div className="bg-card border border-border rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-xl">
                                    <GitCommit className="w-6 h-6 text-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Latest Commit</p>
                                    <p className="font-mono text-sm truncate max-w-[300px]">{latestCommit.commit.message}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-5 h-5 rounded-full overflow-hidden relative">
                                        <Image src={latestCommit.author?.avatar_url || "https://github.com/github.png"} alt={latestCommit.commit.author.name} fill className="object-cover" />
                                    </div>
                                    <span>{latestCommit.commit.author.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDistanceToNow(new Date(latestCommit.commit.author.date), { addSuffix: true })}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Features Column */}
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-yellow-500" /> Key Features
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "AI code suggestions & quick edit",
                                        "Multiple models via OpenRouter",
                                        "AI agent with file manipulation tools",
                                        "CodeMirror 6 editor with minimap",
                                        "In-browser execution with WebContainers",
                                        "Live docs scraping with Firecrawl",
                                        "GitHub import & export",
                                        "Background jobs with Inngest",
                                        "Real-time sync with Convex",
                                        "Clerk authentication & billing",
                                        "Sentry error tracking & LLM monitoring",
                                        "CodeRabbit PR reviews"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                                    <Layout className="w-6 h-6 text-blue-500" /> System Architecture
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                    <p>
                                        Moris is built from the ground up to be a completely in-browser IDE experience, highly optimized using modern frameworks and sandboxing techniques.
                                    </p>
                                    <p className="mt-4">
                                        The application leverages <strong>WebContainers</strong> to provide native execution environments directly on the user&apos;s machine while synchronizing the filesystem back securely via a real-time <strong>Convex</strong> backend. Multi-model AI operations are securely brokered through <strong>OpenRouter</strong> and processed concurrently with <strong>Inngest</strong> Background Jobs.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Tech Stack Column */}
                        <div>
                            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-purple-500" /> Tech Stack
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Frontend / Core</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Next.js 15 (React 19)</Badge>
                                            <Badge>TypeScript</Badge>
                                            <Badge>CodeMirror 6</Badge>
                                            <Badge>WebContainers</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Backend & Sync</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Convex</Badge>
                                            <Badge>Inngest</Badge>
                                            <Badge>Firecrawl</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Security & Auth</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Clerk Auth</Badge>
                                            <Badge>Sentry</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">AI & Tools</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>OpenRouter</Badge>
                                            <Badge>LLM Agents</Badge>
                                            <Badge>CodeRabbit</Badge>
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
