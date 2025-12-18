import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Code2,
  Sparkles,
} from "lucide-react";
import { memo, useMemo, useCallback } from "react";

// Animation variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  },
} as const;

// Quick links constant
const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

// Social links constant with colors
const SOCIAL_LINKS = [
  {
    href: "https://github.com/ajay-kumawat1",
    icon: Github,
    label: "GitHub",
    gradient: "from-gray-600 to-gray-800",
    hoverBg: "hover:bg-gray-600/20",
  },
  {
    href: "https://linkedin.com/in/ajay-kumawat",
    icon: Linkedin,
    label: "LinkedIn",
    gradient: "from-blue-500 to-blue-700",
    hoverBg: "hover:bg-blue-500/20",
  },
  {
    href: "mailto:ajay.kumawat@example.com",
    icon: Mail,
    label: "Email",
    gradient: "from-red-500 to-red-700",
    hoverBg: "hover:bg-red-500/20",
  },
] as const;

// Contact info constant
const CONTACT_INFO = [
  {
    icon: Mail,
    value: "ajay.kumawat@example.com",
    href: "mailto:ajay.kumawat@example.com",
  },
  { icon: Phone, value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, value: "Mumbai, India", href: null },
] as const;

// Background Effects Component
const FooterBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient orbs */}
    <div
      className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"
      style={{ animationDuration: "8s" }}
    />
    <div
      className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse"
      style={{ animationDuration: "10s", animationDelay: "2s" }}
    />
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
  </div>
));

FooterBackground.displayName = "FooterBackground";

// Brand Section Component
const BrandSection = memo(() => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="space-y-6">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
          <Code2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-card-foreground">Ajay Kumawat</h3>
        <p className="text-sm text-primary font-medium">Backend Developer</p>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
      Passionate about building scalable systems and solving complex problems
      with modern technologies. Let's create something amazing together.
    </p>
    {/* Social Links */}
    <div className="flex gap-3">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-card-foreground ${social.hoverBg} transition-all duration-300 shadow-sm hover:shadow-md`}
            aria-label={social.label}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
  </motion.div>
));

BrandSection.displayName = "BrandSection";

// Quick Links Section Component
const QuickLinksSection = memo(() => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="space-y-6">
    <div className="flex items-center gap-2">
      <Sparkles className="w-5 h-5 text-primary" />
      <h4 className="text-lg font-semibold text-card-foreground">
        Quick Links
      </h4>
    </div>
    <nav className="grid grid-cols-2 gap-3">
      {QUICK_LINKS.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          whileHover={{ x: 4 }}
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
          {link.label}
        </motion.a>
      ))}
    </nav>
  </motion.div>
));

QuickLinksSection.displayName = "QuickLinksSection";

// Contact Section Component
const ContactSection = memo(() => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="space-y-6">
    <div className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-primary" />
      <h4 className="text-lg font-semibold text-card-foreground">
        Get in Touch
      </h4>
    </div>
    <div className="space-y-4">
      {CONTACT_INFO.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors duration-300">
              {item.value}
            </span>
          </div>
        );

        return item.href ? (
          <motion.a
            key={item.value}
            href={item.href}
            whileHover={{ x: 4 }}
            className="block"
          >
            {content}
          </motion.a>
        ) : (
          <div key={item.value}>{content}</div>
        );
      })}
    </div>
  </motion.div>
));

ContactSection.displayName = "ContactSection";

// Back to Top Button Component
const BackToTopButton = memo(() => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
});

BackToTopButton.displayName = "BackToTopButton";

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative bg-gradient-to-b from-background via-card to-card border-t border-border/50">
      <FooterBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          <BrandSection />
          <QuickLinksSection />
          <ContactSection />
        </motion.div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>using</span>
              <span className="font-medium text-card-foreground">React</span>
              <span>+</span>
              <span className="font-medium text-card-foreground">
                TypeScript
              </span>
            </motion.div>

            {/* Copyright & Back to Top */}
            <div className="flex items-center gap-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm text-muted-foreground"
              >
                © {currentYear} Ajay Kumawat. All rights reserved.
              </motion.p>
              <BackToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
