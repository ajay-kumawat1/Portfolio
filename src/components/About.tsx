import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import {
  Code2,
  Server,
  Database,
  Zap,
  Award,
  Users,
  Rocket,
  Target,
  TrendingUp,
  Coffee,
  Heart,
  Briefcase,
  Mail,
  Download,
} from "lucide-react";

// Animation variants
const VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  },
};

const HIGHLIGHTS = [
  { icon: Code2, text: "Clean Code", gradient: "from-blue-500 to-cyan-500" },
  {
    icon: Server,
    text: "Scalable APIs",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    text: "Database Design",
    gradient: "from-purple-500 to-pink-500",
  },
  { icon: Zap, text: "Performance", gradient: "from-yellow-500 to-orange-500" },
  { icon: Rocket, text: "Fast Delivery", gradient: "from-red-500 to-pink-500" },
  {
    icon: Target,
    text: "Problem Solving",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const STATS = [
  {
    value: "1.5+",
    label: "Years Experience",
    icon: Briefcase,
    gradient: "from-primary to-blue-500",
  },
  {
    value: "15+",
    label: "Projects Done",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    value: "100%",
    label: "Satisfaction",
    icon: Heart,
    gradient: "from-pink-500 to-red-500",
  },
  {
    value: "24/7",
    label: "Availability",
    icon: Coffee,
    gradient: "from-purple-500 to-indigo-500",
  },
];

const About = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />

      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={VARIANTS.container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left: Profile Card */}
          <motion.div
            variants={VARIANTS.slideInLeft}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              {/* Main profile card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl">
                  {/* Profile Image */}
                  <div className="relative mx-auto w-48 h-48 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full animate-pulse opacity-75 blur-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl border-4 border-background">
                      <span className="text-6xl font-bold text-white">AK</span>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse" />
                  </div>

                  {/* Profile Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl font-bold text-foreground">
                      Ajay Kumawat
                    </h3>
                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        Backend Developer
                      </span>
                    </div>
                    <p className="text-foreground/80 text-sm pt-4">
                      Building scalable and efficient solutions with modern
                      technologies
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="flex justify-center space-x-3 mt-6">
                    <motion.a
                      href="mailto:ajay.kumawat@example.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-xl border border-primary/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </motion.a>
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-accent/10 hover:bg-accent/20 rounded-xl border border-accent/20 transition-colors"
                    >
                      <Download className="w-5 h-5 text-accent" />
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-secondary/10 hover:bg-secondary/20 rounded-xl border border-secondary/20 transition-colors"
                    >
                      <Users className="w-5 h-5 text-secondary" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-xl"
              >
                <Code2 className="w-10 h-10 text-primary" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360, y: [0, -8, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-xl"
              >
                <Server className="w-8 h-8 text-green-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 -left-12 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-xl"
              >
                <Database className="w-7 h-7 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div variants={VARIANTS.slideInRight} className="space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <motion.h2
                variants={VARIANTS.item}
                className="text-5xl sm:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>

              <motion.p
                variants={VARIANTS.item}
                className="text-xl text-foreground/90"
              >
                Passionate developer crafting digital experiences
              </motion.p>
            </div>

            {/* Description */}
            <motion.div
              variants={VARIANTS.item}
              className="space-y-4 text-lg text-foreground leading-relaxed"
            >
              <p>
                I'm a dedicated{" "}
                <span className="text-primary font-semibold">
                  Backend Developer
                </span>{" "}
                with{" "}
                <span className="text-primary font-semibold">1.5+ years</span>{" "}
                of hands-on experience in building robust, scalable server-side
                applications. My passion lies in the{" "}
                <span className="text-blue-400 font-semibold">
                  Node.js ecosystem
                </span>
                , where I've architected RESTful APIs, microservices, and
                high-performance database solutions.
              </p>

              <p>
                I thrive on tackling complex challenges with{" "}
                <span className="text-emerald-400 font-semibold">
                  clean, maintainable code
                </span>
                . From designing efficient database schemas to implementing
                secure authentication systems and optimizing application
                performance—I bring ideas to life with precision and passion.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={VARIANTS.item}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {HIGHLIGHTS.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                  />
                  <div className="relative flex flex-col items-center space-y-2 text-center">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} shadow-lg`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-sm text-foreground">
                      {highlight.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={VARIANTS.item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl text-center">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 shadow-lg`}
                    >
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <motion.h3
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={VARIANTS.item}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all"
              >
                <Users className="w-5 h-5" />
                <span>Let's Connect</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-card/50 backdrop-blur-sm border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
