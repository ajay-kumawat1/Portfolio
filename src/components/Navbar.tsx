import { useState, useEffect, useCallback, memo } from "react";
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

// Navigation items constant
const NAV_ITEMS = [
  { href: "#home", label: "Home", icon: Sparkles },
  { href: "#about", label: "About", icon: Code2 },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#projects", label: "Projects", icon: Code2 },
  { href: "#experience", label: "Experience", icon: Code2 },
  { href: "#contact", label: "Contact", icon: Mail },
] as const;

// Social links constant
const SOCIAL_LINKS = [
  { href: "https://github.com/ajay-kumawat1", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/ajay-kumawat",
    icon: Linkedin,
    label: "LinkedIn",
  },
] as const;

// Logo Component
const Logo = memo(() => (
  <motion.div whileHover={{ scale: 1.02 }} className="flex-shrink-0">
    <a href="#home" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-9 h-9 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
      >
        <span className="text-white font-bold text-sm">AK</span>
      </motion.div>
      <span className="text-xl font-bold text-foreground hover:text-primary transition-colors">
        Ajay Kumawat
      </span>
    </a>
  </motion.div>
));

Logo.displayName = "Logo";

// Desktop Nav Items Component
const DesktopNavItems = memo(({ activeSection }: { activeSection: string }) => (
  <div className="hidden lg:block">
    <div className="flex items-center space-x-2">
      {NAV_ITEMS.map((item, index) => (
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
          <span className="relative z-10 flex items-center space-x-2">
            <span>{item.label}</span>
          </span>
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
));

DesktopNavItems.displayName = "DesktopNavItems";

// Social Links Component
const SocialLinks = memo(() => (
  <div className="hidden lg:flex items-center space-x-2">
    {SOCIAL_LINKS.map((social) => (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/20"
        aria-label={social.label}
      >
        <social.icon size={18} />
      </motion.a>
    ))}
  </div>
));

SocialLinks.displayName = "SocialLinks";

// Theme Toggle Component
const ThemeToggle = memo(
  ({
    darkMode,
    toggleDarkMode,
    scrolled,
  }: {
    darkMode: boolean;
    toggleDarkMode: () => void;
    scrolled: boolean;
  }) => (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className={`relative p-3 rounded-xl transition-all ${
        scrolled
          ? "bg-muted/50 hover:bg-primary/10"
          : "bg-muted/30 hover:bg-primary/10"
      } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
      aria-label="Toggle theme"
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
  )
);

ThemeToggle.displayName = "ThemeToggle";

// Mobile Menu Component
const MobileMenu = memo(
  ({
    isMenuOpen,
    activeSection,
    onClose,
  }: {
    isMenuOpen: boolean;
    activeSection: string;
    onClose: () => void;
  }) => (
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
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={onClose}
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

            <div className="flex items-center space-x-3 px-4 pt-4 border-t border-border/50 mt-4">
              {SOCIAL_LINKS.map((social) => (
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
  )
);

MobileMenu.displayName = "MobileMenu";

const Navbar = memo(({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

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
          <Logo />

          <DesktopNavItems activeSection={activeSection} />

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-3">
            <SocialLinks />

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

            <ThemeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              scrolled={scrolled}
            />

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-xl transition-all ${
                scrolled
                  ? "bg-muted/50 hover:bg-primary/10"
                  : "bg-muted/30 hover:bg-primary/10"
              } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
              aria-label="Toggle menu"
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

        <MobileMenu
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
          onClose={closeMenu}
        />
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
});

Navbar.displayName = "Navbar";

export default Navbar;
