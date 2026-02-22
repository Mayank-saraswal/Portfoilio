import Image from "next/image";
import Link from "next/link";

const SKILLS = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "react", color: "61DAFB", url: "https://react.dev/" },
            { name: "Next.js", icon: "nextdotjs", color: "000000", url: "https://nextjs.org/" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4", url: "https://tailwindcss.com/" },
            { name: "TypeScript", icon: "typescript", color: "3178C6", url: "https://www.typescriptlang.org/" },
            // Using Convex slug if avail or fallback
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "nodedotjs", color: "339933", url: "https://nodejs.org/" },
            { name: "Bun", icon: "bun", color: "FBF0DF", url: "https://bun.sh/" },
            { name: "Prisma", icon: "prisma", color: "2D3748", url: "https://www.prisma.io/" },
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1", url: "https://www.postgresql.org/" },
            { name: "MongoDB", icon: "mongodb", color: "47A248", url: "https://www.mongodb.com/" },
            { name: "Redis", icon: "redis", color: "FF4438", url: "https://redis.io/" },
            { name: "Kafka", icon: "apachekafka", color: "231F20", url: "https://kafka.apache.org/" },
            { name: "Clerk", icon: "clerk", color: "6C47FF", url: "https://clerk.com/" },
            { name: "Convex", icon: "convex", color: "F76E54", url: "https://www.convex.dev/" },
        ]
    },
    {
        category: "AI & Real-time",
        items: [
            { name: "Vercel AI SDK", icon: "vercel", color: "000000", url: "https://sdk.vercel.ai/" },
            { name: "Inngest", icon: "inngest", color: "0B0D0E", url: "https://www.inngest.com/" }, // Might need custom or simpleicon
            { name: "WebRTC", icon: "webrtc", color: "333333", url: "https://webrtc.org/" },
            { name: "Socket.io", icon: "socketdotio", color: "010101", url: "https://socket.io/" },
        ]
    },
    {
        category: "DevOps & Cloud",
        items: [
            { name: "AWS", icon: "amazonaws", color: "232F3E", url: "https://aws.amazon.com/" },
            { name: "Azure", icon: "microsoftazure", color: "0078D4", url: "https://azure.microsoft.com/" },
            { name: "Docker", icon: "docker", color: "2496ED", url: "https://www.docker.com/" },
            { name: "Kubernetes", icon: "kubernetes", color: "326CE5", url: "https://kubernetes.io/" },

        ]
    }
];

export function About() {
    return (
        <section className="mb-24" id="about">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 block">About</span>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Avatar */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden bg-yellow-400 border-4 border-yellow-500 shadow-xl flex-shrink-0 relative">
                    <Image
                        alt="Mayank Saraswal"
                        src="https://unavatar.io/twitter/MayankSaraswal"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl font-display font-bold mb-2">Mayank Saraswal</h2>
                    <p className="text-lg text-primary font-medium mb-4">Backend Developer & Open Source Contributor</p>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base">
                        I'm a Full Stack web developer specialized in building scalable MVPs and complex systems.
                        I love solving real-world problems with modern technologies, from AI integrations to real-time communication.
                        Currently focused on building distributed systems and high-performance web applications.
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-bold flex items-center gap-2 mb-6">
                            <span className="text-primary">⚡</span> Technologies & Tools
                        </h3>

                        <div className="space-y-8">
                            {SKILLS.map((category) => (
                                <div key={category.category}>
                                    <h4 className="text-xs uppercase text-slate-500 font-bold mb-4 tracking-wider flex items-center gap-2">
                                        <span className="w-1 h-3 bg-slate-500 rounded-full"></span>
                                        {category.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {category.items.map((skill) => (
                                            <Link
                                                key={skill.name}
                                                href={skill.url}
                                                target="_blank"
                                                className="group flex items-center gap-2.5 px-3.5 py-2 bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#333] rounded-xl hover:bg-slate-100 dark:hover:bg-[#252525] hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
                                            >
                                                <div className="w-5 h-5 relative transition-all duration-200 group-hover:scale-110">
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
