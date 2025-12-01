import { motion } from "framer-motion";
import { Code2, Palette, Database, Layout, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "Express", "Supabase", "Prisma"]
  },
  {
    category: "Design",
    icon: Palette,
    items: ["Figma", "UI/UX", "Prototyping", "Design Systems", "Adobe XD"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "iOS", "Android", "PWA"]
  }
];

export function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient-primary">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life. Always learning, always exploring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}