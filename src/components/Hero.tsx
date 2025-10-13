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

      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/15 to-accent/20 animate-pulse" />
        <div
          className="absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-secondary/10"
          style={{ animation: "pulse 4s infinite" }}
        />
      </div>
    </div>

    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  </>
));

BackgroundEffects.displayName = "BackgroundEffects";

// Memoized floating elements for performance
const FloatingElements = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 60 + Math.random() * 30,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    []
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: i * 0.8,
      })),
    []
  );

  return (
    <>
      {/* Floating particles */}
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
          {/* Main Title */}
          <motion.h1
            variants={ANIMATION_VARIANTS.item}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 relative"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Ajay
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-2xl -z-10" />
            </span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent">
                Kumawat
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 via-foreground/10 to-foreground/5 blur-xl -z-10" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex items-center justify-center space-x-4 text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Backend Developer
            </motion.span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-primary font-semibold"
            >
              Node.js Expert
            </motion.span>
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

          {/* Tech Stack */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group"
              >
                <div className="flex items-center space-x-3 px-6 py-3 bg-card/50 backdrop-blur-md rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-lg">
                  <tech.icon
                    className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-primary/80 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
              <FileDown className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
              <ExternalLink className="ml-3 h-4 w-4 opacity-80 group-hover:opacity-100" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 bg-card/50 backdrop-blur-md border-2 border-border hover:border-primary/60 text-foreground/80 hover:text-foreground font-bold rounded-2xl transition-all duration-300 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-muted/20 to-card/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <Play className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span>View My Work</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
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
                whileHover={{ scale: 1.15, y: -6 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-4 bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 rounded-2xl shadow-xl hover:shadow-2xl ${social.hoverGlow} transition-all duration-300`}
                title={social.label}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
                />
                <social.icon
                  size={24}
                  className="text-muted-foreground group-hover:text-foreground transition-colors relative z-10"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Scroll to explore
            </p>
            <motion.div
              animate={{
                y: [0, -20, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="group relative p-4 bg-card/40 backdrop-blur-md rounded-full border border-border hover:border-primary/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
