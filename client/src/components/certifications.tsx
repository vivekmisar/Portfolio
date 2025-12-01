import { motion } from "framer-motion";
import { Award, ExternalLink, Star, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "C Programming",
    platform: "Online Certification",
    date: "2023",
    link: "#"
  },
  {
    title: "C++ Programming",
    platform: "Online Certification",
    date: "2023",
    link: "#"
  },
  {
    title: "Data Structures & Algorithms",
    platform: "Online Course",
    date: "2023",
    link: "#"
  },
  {
    title: "Python Programming",
    platform: "Online Certification",
    date: "2024",
    link: "#"
  },
  {
    title: "Core Java",
    platform: "Java Institute",
    date: "2024",
    link: "#"
  },
  {
    title: "Advanced Java",
    platform: "Java Institute",
    date: "2024",
    link: "#"
  },
  {
    title: "Hibernate Framework",
    platform: "Online Course",
    date: "2024",
    link: "#"
  },
  {
    title: "Postman API Testing",
    platform: "Postman Learning",
    date: "2024",
    link: "#"
  }
];

const achievements = [
  {
    title: "5-Star Rating in Multiple Languages",
    description: "Achieved 5-star rating in C, C++, Java, and SQL on HackerRank, demonstrating multi-language expertise and problem-solving skills",
    icon: Star,
    color: "text-yellow-400"
  },
  {
    title: "200+ LeetCode Problems",
    description: "Solved over 200 algorithmic challenges on LeetCode, covering arrays, strings, trees, graphs, dynamic programming, and more",
    icon: Code,
    color: "text-orange-400"
  },
  {
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons with working prototypes, showcasing rapid development skills and innovation under pressure",
    icon: Trophy,
    color: "text-green-400"
  }
];

export function Certifications() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="certifications">
      <div className="container mx-auto px-4">
        {/* Key Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Key Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111113] border border-white/5 p-8 rounded-2xl text-center hover:border-primary/30 transition-colors group"
              >
                <div className={`w-12 h-12 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center ${achievement.color} group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f1219] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-8 h-8 text-blue-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.platform}</p>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={cert.link}
                    className="flex items-center justify-center gap-2 w-full py-3 border-t border-white/5 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Verify
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}