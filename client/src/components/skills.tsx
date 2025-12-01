import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  Terminal, 
  Cpu,
  Globe,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "C", "C++", "Python", "SQL", "PL/SQL"]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "MVC Architecture"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Frameworks",
    icon: Settings,
    skills: ["Hibernate", "Docker", "Git & GitHub", "Firebase", "Postman", "IntelliJ IDEA", "VS Code"]
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "Multithreading", "Debugging", "Design Patterns"]
  },
  {
    title: "Soft Skills",
    icon: Server,
    skills: ["Teamwork", "Communication", "Leadership", "Problem Solving"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient-primary">Toolkit</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A well-rounded technical skillset built through hands-on projects, real-world problem-solving, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-colors text-muted-foreground hover:text-foreground cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}