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
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-2xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg backdrop-blur-sm"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-500/20"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for work</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ajay
            </span>
            <br />
            <span className="text-foreground">Kumawat</span>
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

          {/* Enhanced Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground mb-12 leading-relaxed"
          >
            Crafting{" "}
            <span className="text-primary font-semibold">
              scalable backend systems
            </span>{" "}
            and
            <span className="text-green-500 font-semibold">
              {" "}
              robust APIs
            </span>{" "}
            with
            <span className="text-purple-500 font-semibold">
              {" "}
              1.5+ years
            </span>{" "}
            of hands-on experience in modern web technologies.
          </motion.p>

          {/* Tech Stack Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center space-x-2 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
              <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-primary text-foreground hover:text-primary font-semibold rounded-2xl transition-all"
            >
              <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span>View My Work</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            {[
              {
                href: "https://github.com/ajay-kumawat1",
                icon: Github,
                label: "GitHub",
                color: "hover:text-gray-900 hover:bg-gray-100",
              },
              {
                href: "https://linkedin.com/in/ajay-kumawat",
                icon: Linkedin,
                label: "LinkedIn",
                color: "hover:text-blue-600 hover:bg-blue-50",
              },
              {
                href: "mailto:ajay.kumawat@example.com",
                icon: Mail,
                label: "Email",
                color: "hover:text-red-500 hover:bg-red-50",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-background/50 backdrop-blur-sm border border-border rounded-2xl transition-all ${social.color}`}
                title={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Scroll to explore
            </p>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-3 bg-primary/10 rounded-full border border-primary/20"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
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
