import { motion } from "framer-motion";
import { Award, CheckCircle, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Programming in Java",
    platform: "NPTEL",
    date: "2024",
    skills: ["Core Java", "OOP"],
    link: "#"
  },
  {
    title: "Data Structures and Algorithms",
    platform: "Coursera",
    date: "2023",
    skills: ["DSA", "Problem Solving"],
    link: "#"
  },
  {
    title: "Web Development Bootcamp",
    platform: "Udemy",
    date: "2023",
    skills: ["HTML", "CSS", "JS"],
    link: "#"
  },
  {
    title: "SQL (Basic)",
    platform: "HackerRank",
    date: "2023",
    skills: ["SQL", "Database"],
    link: "#"
  }
];

const achievements = [
  "Achieved 5-star rating in C, C++, Java, and SQL on HackerRank demonstrating multi-language expertise",
  "Solved 200+ problems on LeetCode across various difficulty levels",
  "Participated in multiple hackathons achieving top 10 positions with working prototypes",
  "Active contributor to open-source projects on GitHub"
];

export function Certifications() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="certifications">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & <span className="text-gradient-primary">Certifications</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validating my skills through recognized platforms and continuous competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{cert.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{cert.platform}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary" asChild>
                    <a href={cert.link}>Verify</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex gap-4"
                >
                  <div className="mt-1 h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-muted-foreground text-base">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}