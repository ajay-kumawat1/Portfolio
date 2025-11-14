import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { memo, useMemo } from "react";

// Quick links constant
const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

// Social links constant
const SOCIAL_LINKS = [
  {
    href: "https://github.com/ajay-kumawat1",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/ajay-kumawat",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:ajay.kumawat@example.com",
    icon: Mail,
    label: "Email",
  },
] as const;

// Contact info constant
const CONTACT_INFO = [
  "ajay.kumawat@example.com",
  "+91 98765 43210",
  "Mumbai, India",
] as const;

// Brand Section Component
const BrandSection = memo(() => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-card-foreground">Ajay Kumawat</h3>
    <p className="text-muted-foreground text-sm max-w-xs">
      Backend Developer passionate about building scalable systems and solving
      complex problems with modern technologies.
    </p>
  </div>
));

BrandSection.displayName = "BrandSection";

// Quick Links Section Component
const QuickLinksSection = memo(() => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
    <nav className="flex flex-col space-y-2">
      {QUICK_LINKS.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          whileHover={{ x: 5 }}
          className="text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          {link.label}
        </motion.a>
      ))}
    </nav>
  </div>
));

QuickLinksSection.displayName = "QuickLinksSection";

// Social Links Section Component
const SocialSection = memo(() => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold text-card-foreground">Connect</h4>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={social.label}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
    <div className="text-sm text-muted-foreground space-y-1">
      {CONTACT_INFO.map((info) => (
        <p key={info}>{info}</p>
      ))}
    </div>
  </div>
));

SocialSection.displayName = "SocialSection";

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BrandSection />
          <QuickLinksSection />
          <SocialSection />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-muted-foreground text-sm flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
              React + TypeScript
            </motion.p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              © {currentYear} Ajay Kumawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
