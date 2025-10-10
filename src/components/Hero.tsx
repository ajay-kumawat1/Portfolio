import { motion } from "framer-motion";
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

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const techStack = [
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Express", icon: Code2, color: "text-blue-500" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "TypeScript", icon: Code2, color: "text-blue-600" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ultra Advanced Background System */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/10 via-transparent to-indigo-900/15" />

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 via-transparent to-emerald-500/10"
            style={{ animation: "pulse 4s infinite" }}
          />
        </div>
      </div>

      {/* Sophisticated Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large dynamic gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/25 via-pink-500/15 to-transparent rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-indigo-500/20 rounded-full blur-2xl"
        />

        {/* Premium floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/30 rounded-2xl backdrop-blur-sm bg-primary/5"
        />

        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/30 rounded-full backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/5"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-primary/30 to-blue-500/20 rounded-lg backdrop-blur-sm border border-primary/20"
        />

        {/* Floating particles/dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 30}%`,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Enhanced Main Title with Advanced Gradient */}
          <motion.h1
            variants={itemVariants}
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
              <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                Kumawat
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100/10 via-white/10 to-slate-200/10 blur-xl -z-10" />
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            variants={itemVariants}
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

          {/* Enhanced Description with Theme Colors */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-300 mb-12 leading-relaxed"
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              scalable backend systems
            </span>{" "}
            and
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold">
              {" "}
              robust APIs
            </span>{" "}
            with
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
              {" "}
              1.5+ years
            </span>{" "}
            of hands-on experience in modern web technologies.
          </motion.p>

          {/* Enhanced Tech Stack Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group"
              >
                <div className="flex items-center space-x-3 px-6 py-3 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <tech.icon
                    className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
              <FileDown className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
              <ExternalLink className="ml-3 h-4 w-4 opacity-80 group-hover:opacity-100" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-md border-2 border-slate-600/50 hover:border-cyan-400/60 text-slate-200 hover:text-white font-bold rounded-2xl transition-all duration-300 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <Play className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span>View My Work</span>
            </motion.a>
          </motion.div>

          {/* Premium Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            {[
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
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -6 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-4 bg-slate-800/40 backdrop-blur-md border border-slate-600/30 hover:border-slate-400/50 rounded-2xl shadow-xl hover:shadow-2xl ${social.hoverGlow} transition-all duration-300`}
                title={social.label}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
                />
                <social.icon
                  size={24}
                  className="text-slate-300 group-hover:text-white transition-colors relative z-10"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Premium Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-slate-400 mb-4 font-medium">
              Scroll to explore
            </p>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="group relative p-4 bg-slate-800/40 backdrop-blur-md rounded-full border border-slate-600/30 hover:border-cyan-400/50 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowDown className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors relative z-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-6 h-6 text-primary/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
