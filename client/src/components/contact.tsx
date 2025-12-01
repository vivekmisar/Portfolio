import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Code2 } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient-primary">Touch</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for internship opportunities and full-time positions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-medium">aniket.jumde@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Me</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6">Connect with me</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Code2, label: "LeetCode" }
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <Input placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary/50 h-12 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input placeholder="john@example.com" type="email" className="bg-black/20 border-white/10 focus:border-primary/50 h-12 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can I help you?" className="bg-black/20 border-white/10 focus:border-primary/50 min-h-[150px] rounded-xl resize-none" />
              </div>

              <Button className="w-full h-12 text-base rounded-xl bg-primary hover:bg-primary/90 text-white">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}