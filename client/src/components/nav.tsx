import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Set initial dark mode
    document.documentElement.classList.add("dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`mx-auto max-w-6xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
              ? "bg-white/80 dark:bg-black/50 backdrop-blur-lg border border-black/5 dark:border-white/10 shadow-lg"
              : "bg-transparent border-transparent"
            }`}
        >
          <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-mono">AJ</span>
            Aniket
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-muted-foreground hover:text-primary"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="https://drive.google.com/file/d/1KVUn2BsmhlHPinjNnRZhveGyL2WQZ7cO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 p-4 md:hidden"
        >
          <div className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
            <Button asChild className="w-full mt-2">
              <a href="https://drive.google.com/file/d/1KVUn2BsmhlHPinjNnRZhveGyL2WQZ7cO/view?usp=sharing" download>
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}