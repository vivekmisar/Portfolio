import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary font-sans">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Aniket. All rights reserved.</p>
      </footer>
    </div>
  );
}