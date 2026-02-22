import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Linkedin, Twitter, Instagram, FileText, Send, Play } from "lucide-react";
import { getRecentlyPlayed, getNowPlaying } from "@/lib/spotify";

import { RotatingText } from "@/components/ui/RotatingText";

export async function Hero() {
    const recentlyPlayed = await getRecentlyPlayed();
    const nowPlaying = await getNowPlaying();

    // Parse Spotify Data
    let songName = "Cutiepie"; // Default from screenshot
    let artistName = "Pritam, Pardeep Sran, Nakash Aziz";
    let albumArt = "https://i.scdn.co/image/ab67616d0000b27346e0f6e1f0f4f0f4f0f4f0f4"; // Placeholder or Spotify URL
    let isPlaying = false;
    let songUrl = "#";

    if (nowPlaying?.status === 200) {
        const data = await nowPlaying.json();
        if (data.item) {
            isPlaying = data.is_playing;
            songName = data.item.name;
            artistName = data.item.artists.map((a: any) => a.name).join(", ");
            albumArt = data.item.album.images[0].url;
            songUrl = data.item.external_urls.spotify;
        }
    } else if (recentlyPlayed?.status === 200) {
        const data = await recentlyPlayed.json();
        if (data.items && data.items.length > 0) {
            const item = data.items[0].track;
            songName = item.name;
            artistName = item.artists.map((a: any) => a.name).join(", ");
            albumArt = item.album.images[0].url;
            songUrl = item.external_urls.spotify;
        }
    }

    return (
        <section className="pt-32 pb-16">
            {/* Avatar */}
            <div className="relative inline-block mb-8">
                <div className="w-24 h-24 rounded-full bg-yellow-400 p-0.5 border-4 border-yellow-500 overflow-hidden">
                    <Image
                        alt="Profile"
                        className="w-full h-full object-cover"
                        src="https://unavatar.io/twitter/MayankSaraswal"
                        width={96}
                        height={96}
                        priority
                    />
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
                </div>
            </div>


            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Hi, I'm Mayank — <RotatingText words={["A Software Engineer.", "A Full Stack Developer.", "A Good Human Being.", "An Introvert."]} />
            </h1>

            {/* Description with Badges */}
            <div className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I build <span className="text-foreground font-bold">scalable webapps</span> using
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-blue-400 font-bold">TS</span> TypeScript
                </span>,
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-cyan-400">⚛️</span> MERN Stack
                </span>,
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-white font-bold">N</span> Next.js
                </span>,
                and
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-blue-300">🐘</span> PostgreSQL
                </span>.
                <br className="mt-2 block" />
                Specialized in distributed systems with
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-orange-400 font-bold">K</span> Kafka
                </span>,
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-yellow-400 font-bold">C</span> Convex
                </span>,
                and
                <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-md bg-[#2d2d2d] text-white text-sm border border-[#3e3e3e]">
                    <span className="text-indigo-400 font-bold">I</span> Inngest
                </span>.
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#" className="inline-flex items-center gap-2 bg-[#2d2d2d] text-white border border-[#3e3e3e] px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#3e3e3e] transition-colors">
                    <FileText className="w-4 h-4" /> Resume / CV
                </Link>
                <Link href="mailto:contact@example.com" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors">
                    <Send className="w-4 h-4" /> Get in touch
                </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mb-12">
                <SocialLink href="https://x.com/MayankSaraswal" icon={<span className="font-bold text-lg">𝕏</span>} />
                <SocialLink href="https://in.linkedin.com/in/mayank-saini-728080308" icon={<Linkedin className="w-5 h-5" />} />
                <SocialLink href="https://github.com/Mayank-saraswal" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://www.instagram.com/sharif_mayank" icon={<Instagram className="w-5 h-5" />} />
                <SocialLink href="mailto:contact@example.com" icon={<Mail className="w-5 h-5" />} />
            </div>

            {/* Spotify Card */}
            <div className="w-full max-w-lg bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden relative">
                        <Image alt="Song cover" src={albumArt} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-3 h-3 bg-[#1db954] rounded-full flex items-center justify-center">
                                <span className="text-black text-[6px]">Spotify</span>
                            </span>
                            <span className="text-xs text-muted-foreground">{isPlaying ? "Listening to" : "Last played"}</span>
                        </div>
                        <div className="font-bold text-sm text-white hover:underline cursor-pointer truncate max-w-[200px]">
                            <a href={songUrl} target="_blank" rel="noopener noreferrer">{songName}</a>
                        </div>
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">{artistName}</div>
                    </div>
                </div>
                <a href={songUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-white transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                </a>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} className="text-muted-foreground hover:text-foreground transition-colors">
            {icon}
        </a>
    )
}
