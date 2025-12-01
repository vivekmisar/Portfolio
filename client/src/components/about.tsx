import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "JSPM’s Rajarshi Shahu College of Engineering, Pune",
    year: "2023–2027",
    grade: "8.50 CGPA",
    description: "Focused on Full Stack Development, Data Structures, and Algorithms."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Shivsai Universal Junior College, Buldhana",
    year: "2023",
    grade: "63.50%",
    description: "Maharashtra State Board"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Z.P. High School",
    year: "2021",
    grade: "",
    description: "Maharashtra State Board"
  }
];

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient-primary">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating efficient, scalable solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl h-full border-l-4 border-l-primary"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Professional Focus</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a B.Tech IT student, my journey in technology is driven by a deep curiosity for how complex systems are built. 
              I specialize in <span className="text-foreground font-medium">Java Development</span> and <span className="text-foreground font-medium">Full Stack Engineering</span>, 
              consistently pushing myself to learn modern frameworks and best practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to secure a challenging role where I can apply my technical skills in backend development, 
              database management, and frontend interfaces to solve real-world problems. I thrive in collaborative 
              environments and am eager to contribute to high-impact projects.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6 border-l border-white/10 pl-8 relative">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background" />
                  <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-foreground font-medium mb-1">{edu.school}</p>
                    {edu.grade && <p className="text-sm text-primary/80 font-medium mb-2">{edu.grade}</p>}
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}