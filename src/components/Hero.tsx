import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import {
  FileDown,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  Code2,
  Server,
  Database,
  Sparkles,
  Play,
  ExternalLink,
} from "lucide-react";

// Constants moved outside component to prevent recreation
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  },
  floating: {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
    },
  },
};

const TECH_STACK = [
  { name: "Node.js", icon: Server, color: "text-primary" },
  { name: "Express", icon: Code2, color: "text-accent" },
  { name: "MongoDB", icon: Database, color: "text-primary" },
  { name: "TypeScript", icon: Code2, color: "text-accent" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ajay-kumawat1",
    icon: Github,
    label: "GitHub",
    gradient: "from-gray-600 to-gray-800",
    hoverGlow: "hover:shadow-gray-500/25",
  },
  {
    href: "https://linkedin.com/in/ajay-kumawat",
    icon: Linkedin,
    label: "LinkedIn",
    gradient: "from-blue-500 to-blue-700",
    hoverGlow: "hover:shadow-blue-500/25",
  },
  {
    href: "mailto:ajay.kumawat@example.com",
    icon: Mail,
    label: "Email",
    gradient: "from-red-500 to-red-700",
    hoverGlow: "hover:shadow-red-500/25",
  },
] as const;

// Memoized background component for better performance
const BackgroundEffects = memo(() => (
  <>
    {/* Static gradient backgrounds */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-secondary/15" />
    </div>

    {/* Animated background elements - Reduced complexity */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl"
      />
    </div>
  </>
));

BackgroundEffects.displayName = "BackgroundEffects";

// Memoized floating elements - Reduced particle count for better performance
const FloatingElements = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: 20 + i * 15,
        top: 65 + (i % 3) * 8,
        duration: 6 + (i % 3) * 2,
        delay: i * 0.8,
      })),
    []
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        top: 20 + i * 25,
        left: 15 + i * 30,
        delay: i * 1.2,
      })),
    []
  );

  return (
    <>
      {particles.map(({ id, left, top, duration, delay }) => (
        <motion.div
          key={id}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map(({ id, top, left, delay }) => (
          <motion.div
            key={id}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay,
            }}
            className="absolute"
            style={{ top: `${top}%`, left: `${left}%` }}
          >
            <Sparkles className="w-6 h-6 text-primary/30" />
          </motion.div>
        ))}
      </div>
    </>
  );
});

FloatingElements.displayName = "FloatingElements";

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <BackgroundEffects />
      <FloatingElements />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Title - Optimized gradients */}
          <motion.h1
            variants={ANIMATION_VARIANTS.item}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ajay
            </span>
            <br />
            <span className="text-foreground">Kumawat</span>
          </motion.h1>

          {/* Subtitle - Simplified animation */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex items-center justify-center space-x-4 text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8"
          >
            <span>Backend Developer</span>
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary font-semibold">Node.js Expert</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ANIMATION_VARIANTS.item}
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground mb-12 leading-relaxed"
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-bold">
              scalable backend systems
            </span>{" "}
            and
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent font-bold">
              {" "}
              robust APIs
            </span>{" "}
            with
            <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent font-bold">
              {" "}
              1.5+ years
            </span>{" "}
            of hands-on experience in modern web technologies.
          </motion.p>

          {/* Tech Stack - Simplified hover effects */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center space-x-3 px-6 py-3 bg-card/50 backdrop-blur-md rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
                <span className="text-sm font-semibold text-foreground/80">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Optimized animations */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <FileDown className="mr-3 h-5 w-5" />
              <span>Download Resume</span>
              <ExternalLink className="ml-3 h-4 w-4" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-4 bg-card/50 backdrop-blur-md border-2 border-border hover:border-primary/60 text-foreground font-bold rounded-2xl transition-all duration-300 shadow-lg"
            >
              <Play className="mr-3 h-5 w-5" />
              <span>View My Work</span>
            </motion.a>
          </motion.div>

          {/* Social Links - Simplified */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon
                  size={24}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator - Simplified */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Scroll to explore
            </p>
            <motion.a
              href="#about"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 bg-card/40 backdrop-blur-md rounded-full border border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
