import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Sparkles },
    { href: "#about", label: "About", icon: Code2 },
    { href: "#skills", label: "Skills", icon: Code2 },
    { href: "#projects", label: "Projects", icon: Code2 },
    { href: "#experience", label: "Experience", icon: Code2 },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { href: "https://github.com/ajay-kumawat1", icon: Github, label: "GitHub" },
    {
      href: "https://linkedin.com/in/ajay-kumawat",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 relative group"
          >
            <a href="#home" className="flex items-center space-x-3">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Logo Container */}
              <div className="relative flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-2 bg-gradient-to-br from-primary to-purple-500 rounded-lg"
                >
                  <Code2 className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    AJAY KUMAWAT
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Backend Developer
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all group ${
                    activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active Indicator */}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 rounded-xl border border-primary/20"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {/* Hover Effect */}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.label}</span>
                  </span>

                  {/* Underline Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-3">
            {/* Social Links - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>

            {/* Theme Toggle with Enhanced Animation */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`relative p-3 rounded-xl transition-all ${
                scrolled
                  ? "bg-muted/50 hover:bg-primary/10"
                  : "bg-muted/30 hover:bg-primary/10"
              } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all ${
                scrolled
                  ? "bg-muted/50 hover:bg-primary/10"
                  : "bg-muted/30 hover:bg-primary/10"
              } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-4 pb-6 space-y-2 border-t border-border/50 mt-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === item.href
                        ? "bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </motion.a>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center space-x-3 px-4 pt-4 border-t border-border/50 mt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors border border-border/30 hover:border-primary/20"
                    >
                      <social.icon size={18} />
                      <span className="text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Download CV */}
                <motion.a
                  href="/resume.pdf"
                  download
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-lg mx-4"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500"
        style={{
          width: scrolled ? "100%" : "0%",
          transition: "width 0.3s ease-out",
        }}
      />
    </motion.nav>
  );
};

export default Navbar;
