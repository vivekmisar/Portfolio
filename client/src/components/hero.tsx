import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import myImage from "@assets/generated_images/professional_developer_headshot.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="text-sm text-muted-foreground font-medium">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building digital <br />
            <span className="text-gradient-primary">experiences</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I'm Aniket, a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend form and function.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full text-base h-12 px-8 bg-white text-black hover:bg-gray-200 border-0">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 bg-white/5 border-white/10 hover:bg-white/10">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 mt-12">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <img 
              src={myImage} 
              alt="Aniket Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-1/4 p-4 rounded-2xl glass-card border-white/10 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <span className="font-mono text-xl">⚛️</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">React Expert</p>
              <p className="font-bold">5 Years</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-1/4 p-4 rounded-2xl glass-card border-white/10 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <span className="font-mono text-xl">🚀</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Projects</p>
              <p className="font-bold">50+ Shipped</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}