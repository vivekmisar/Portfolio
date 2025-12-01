import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform utilizing OpenAI API to generate marketing copy and social media posts.",
    tags: ["React", "Node.js", "OpenAI", "Stripe"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Task Master",
    description: "Collaborative project management tool with drag-and-drop boards and team chat.",
    tags: ["Vue", "Firebase", "Tailwind", "Pinia"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section className="py-24 bg-black/20" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient-primary">Projects</span></h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent work, ranging from web applications to design systems.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">View Github</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <Github className="w-4 h-4 mr-2" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}