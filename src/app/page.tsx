import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Blogs } from "@/components/sections/Blogs";
import { Footer } from "@/components/sections/Footer";
import { ClickFireworks } from "@/components/features/ClickFireworks";
import { ChatButton } from "@/components/features/ChatButton";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <ClickFireworks />

      <Header />

      <div className="max-w-5xl mx-auto px-6">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <GithubActivity />
        <Blogs />

        <section className="mb-32">
          <div className="p-12 rounded-[2.5rem] bg-card border border-border text-center relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-muted-foreground mb-6">Hey, you scrolled this far, let's talk.</p>
              <button className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                Book a Free Call
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ChatButton />
    </main>
  );
}
