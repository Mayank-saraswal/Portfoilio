import { Header } from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Globe, GitCommit, Calendar, CheckCircle2, Zap, Layout, Play, Shield, Database, Lock, Bug } from "lucide-react";
import { getLatestCommit } from "@/lib/github";
import { formatDistanceToNow } from "date-fns";

export default async function NodeBaseProject() {
    const latestCommit = await getLatestCommit("Mayank-saraswal/n8n");

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
                                <span className="text-sm font-bold text-green-500 uppercase tracking-wider">Live Production</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">NodeBase</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                An AI automation tool designed to streamline and orchestrate complex AI workflows with ease. Build powerful automations visually.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://www.nodebase.tech/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                                >
                                    <Globe className="w-5 h-5" /> Visit Website
                                </Link>
                                <Link
                                    href="https://github.com/Mayank-saraswal/n8n"
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
                                src="/nodebase.png"
                                alt="NodeBase Dashboard"
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
                                        <Image src={latestCommit.author.avatar_url} alt={latestCommit.commit.author.name} fill className="object-cover" />
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
                                        "Visual workflow builder",
                                        "Trigger nodes (Webhook, Google Form, Stripe)",
                                        "AI integrations (OpenAI, Claude, Gemini, DeepSeek)",
                                        "Messaging nodes (Discord, Slack, Telegram)",
                                        "HTTP request node",
                                        "Background job execution (Inngest)",
                                        "Polar payments & subscriptions",
                                        "Workday & Google integration",
                                        "CodeRabbit PR reviews",
                                        "Production-ready SaaS"
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
                                        NodeBase is built as a highly scalable distributed system. It leverages a modern stack designed for performance and reliability.
                                        The core interaction happens on a <strong>React Flow canvas</strong>, allowing users to visually construct complex automation workflows.
                                    </p>
                                    <p className="mt-4">
                                        Backend execution is handled asynchronously via <strong>Inngest</strong>, ensuring robust background job processing even for long-running AI tasks.
                                        Data is persisted securely in <strong>Neon Postgres</strong> via <strong>Prisma ORM</strong>, providing a type-safe database layer.
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
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Core</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Next.js 15</Badge>
                                            <Badge>TypeScript</Badge>
                                            <Badge>Tailwind</Badge>
                                            <Badge>React Flow</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Backend & Data</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>tRPC</Badge>
                                            <Badge>Prisma</Badge>
                                            <Badge>Neon Postgres</Badge>
                                            <Badge>Inngest</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">Security & Auth</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>Better Auth</Badge>
                                            <Badge>Sentry</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-muted-foreground font-bold mb-3">AI & Payment</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge>OpenAI</Badge>
                                            <Badge>Anthropic</Badge>
                                            <Badge>Gemini</Badge>
                                            <Badge>Polar</Badge>
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
