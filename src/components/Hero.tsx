import { motion } from "framer-motion";
import { memo } from "react";
import {
  FileDown,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  Play,
  ExternalLink,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";

// Constants moved outside component to prevent recreation
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
  floating: {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
    },
  },
};

// const TECH_STACK = [
//   { name: "Node.js", icon: Server, color: "text-primary" },
//   { name: "Express", icon: Code2, color: "text-accent" },
//   { name: "MongoDB", icon: Database, color: "text-primary" },
//   { name: "TypeScript", icon: Code2, color: "text-accent" },
// ] as const;

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

// Memoized background component - Enhanced with better visuals
const BackgroundEffects = memo(() => (
  <>
    {/* Animated gradient mesh background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
    </div>

    {/* Animated orbs with better colors */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
      />
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
  </>
));

BackgroundEffects.displayName = "BackgroundEffects";

// Enhanced floating elements with icons and particles
const FloatingElements = memo(() => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Floating code symbols */}
    <motion.div
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[10%] top-[20%]"
    >
      <Code2 className="w-12 h-12 text-cyan-400/30" />
    </motion.div>

    <motion.div
      animate={{
        y: [0, 25, 0],
        rotate: [0, -10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute right-[15%] top-[30%]"
    >
      <Sparkles className="w-10 h-10 text-purple-400/30" />
    </motion.div>

    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 15, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute left-[85%] bottom-[35%]"
    >
      <Zap className="w-8 h-8 text-yellow-400/30" />
    </motion.div>

    {/* Floating particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -50, 0],
          x: [0, Math.sin(i) * 20, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
        className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
        style={{
          left: `${15 + i * 10}%`,
          bottom: "10%",
        }}
      />
    ))}
  </div>
));

FloatingElements.displayName = "FloatingElements";

// Tech Stack Component
// const TechStack = memo(() => (
//   <motion.div
//     variants={ANIMATION_VARIANTS.item}
//     className="flex flex-wrap justify-center items-center gap-6 mb-12"
//   >
//     {TECH_STACK.map((tech) => (
//       <motion.div
//         key={tech.name}
//         whileHover={{ scale: 1.05, y: -3 }}
//         className="flex items-center space-x-3 px-6 py-3 bg-card/50 backdrop-blur-md rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-lg"
//       >
//         <tech.icon className={`w-6 h-6 ${tech.color}`} />
//         <span className="text-sm font-semibold text-foreground/80">
//           {tech.name}
//         </span>
//       </motion.div>
//     ))}
//   </motion.div>
// ));

// TechStack.displayName = "TechStack";

// CTA Buttons Component
const CTAButtons = memo(() => (
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
      className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <FileDown className="relative mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
      <span className="relative">Download Resume</span>
      <ExternalLink className="relative ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </motion.a>

    <motion.a
      href="#projects"
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-md border-2 border-blue-500/30 hover:border-blue-400/60 text-slate-200 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
    >
      <Play className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      <span>View My Work</span>
    </motion.a>
  </motion.div>
));

CTAButtons.displayName = "CTAButtons";

// Social Links Component
const SocialLinks = memo(() => (
  <motion.div
    variants={ANIMATION_VARIANTS.item}
    className="flex justify-center items-center space-x-6 mb-12"
  >
    {SOCIAL_LINKS.map((social, index) => (
      <motion.a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
        whileHover={{ scale: 1.15, y: -6, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative p-4 bg-slate-800/40 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/60 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
        aria-label={social.label}
      >
        <social.icon
          size={24}
          className="text-slate-400 group-hover:text-blue-400 transition-colors"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
      </motion.a>
    ))}
  </motion.div>
));

SocialLinks.displayName = "SocialLinks";

// Scroll Indicator Component
const ScrollIndicator = memo(() => (
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
));

ScrollIndicator.displayName = "ScrollIndicator";

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
          {/* Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Title - Enhanced gradients */}
          <motion.h1
            variants={ANIMATION_VARIANTS.item}
            className="text-5xl sm:text-7xl lg:text-9xl font-black mb-6 tracking-tight"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Ajay
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Kumawat
            </span>
          </motion.h1>

          {/* Subtitle - Enhanced with better styling */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl lg:text-3xl mb-10"
          >
            <span className="text-slate-300 font-semibold">
              Backend Developer
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              Node.js Expert
            </span>
          </motion.div>

          {/* Description - Enhanced typography */}
          <motion.p
            variants={ANIMATION_VARIANTS.item}
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-400 mb-12 leading-relaxed"
          >
            Crafting{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                scalable backend systems
              </span>
              <motion.span
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 origin-left"
              />
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">
                robust APIs
              </span>
              <motion.span
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 origin-left"
              />
            </span>{" "}
            with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
                1.5+ years
              </span>
              <motion.span
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 origin-left"
              />
            </span>{" "}
            of hands-on experience in modern web technologies.
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="flex flex-wrap justify-center items-center gap-3 mb-12"
          >
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "REST APIs",
              "Docker",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm hover:border-blue-400/60 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Tech Stack - Simplified hover effects */}
          {/* <TechStack /> */}

          {/* CTA Buttons - Optimized animations */}
          <CTAButtons />

          {/* Social Links - Simplified */}
          <SocialLinks />

          {/* Scroll Indicator - Simplified */}
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
