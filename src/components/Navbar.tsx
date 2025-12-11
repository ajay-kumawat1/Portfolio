import { useState, useEffect, useCallback, memo } from "react";
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

// Logo Component - CSS-only hover for fast rendering
const Logo = memo(() => (
  <div className="flex-shrink-0">
    <a href="#home" className="flex items-center space-x-2 group">
      <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
        <span className="text-white font-bold text-sm">AK</span>
      </div>
      <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
        Ajay Kumawat
      </span>
    </a>
  </div>
));

Logo.displayName = "Logo";

// Desktop Nav Items Component - Simplified for fast rendering
const DesktopNavItems = memo(({ activeSection }: { activeSection: string }) => (
  <div className="hidden lg:block">
    <div className="flex items-center space-x-2">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
            activeSection === item.href
              ? "text-primary bg-primary/10 border border-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  </div>
));

DesktopNavItems.displayName = "DesktopNavItems";

// Social Links Component - CSS-only hover
const SocialLinks = memo(() => (
  <div className="hidden lg:flex items-center space-x-2">
    {SOCIAL_LINKS.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 border border-transparent hover:border-primary/20 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
        aria-label={social.label}
      >
        <social.icon size={18} />
      </a>
    ))}
  </div>
));

SocialLinks.displayName = "SocialLinks";

// Theme Toggle Component - CSS-only for instant response
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
    <button
      onClick={toggleDarkMode}
      className={`relative p-3 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${
        scrolled
          ? "bg-muted/50 hover:bg-primary/10"
          : "bg-muted/30 hover:bg-primary/10"
      } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
);

ThemeToggle.displayName = "ThemeToggle";

// Download Resume Button Component - CSS-only hover
const DownloadResumeButton = memo(() => (
  <a
    href="/resume.pdf"
    download
    className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
  >
    <Download size={16} />
    <span>Resume</span>
  </a>
));

DownloadResumeButton.displayName = "DownloadResumeButton";

// Mobile Menu Button Component
interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
  scrolled: boolean;
}

const MobileMenuButton = memo(
  ({ isMenuOpen, onClick, scrolled }: MobileMenuButtonProps) => (
    <button
      onClick={onClick}
      className={`lg:hidden p-3 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${
        scrolled
          ? "bg-muted/50 hover:bg-primary/10"
          : "bg-muted/30 hover:bg-primary/10"
      } text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20`}
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  )
);

MobileMenuButton.displayName = "MobileMenuButton";

// Mobile Menu Component - CSS-only transitions
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
    <div
      className={`lg:hidden overflow-hidden transition-all duration-200 ${
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-2 pt-4 pb-6 space-y-2 border-t border-border/50 mt-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
              activeSection === item.href
                ? "bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}

        <div className="flex items-center space-x-3 px-4 pt-4 border-t border-border/50 mt-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors duration-200 border border-border/30 hover:border-primary/20 active:scale-95"
            >
              <social.icon size={18} />
              <span className="text-sm">{social.label}</span>
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-lg mx-4 active:scale-95 transition-transform duration-200"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
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
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      // Throttle scroll updates for better performance
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
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

        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 animate-slide-down ${
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
            <DownloadResumeButton />

            <ThemeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              scrolled={scrolled}
            />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onClick={toggleMenu}
              scrolled={scrolled}
            />
          </div>
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
          onClose={closeMenu}
        />
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500 transition-all duration-300"
        style={{ width: scrolled ? "100%" : "0%" }}
      />
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
