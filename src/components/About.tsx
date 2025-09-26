import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Zap, Award, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const highlights = [
    { icon: Code2, text: "Clean Code", color: "text-blue-500" },
    { icon: Server, text: "Scalable APIs", color: "text-green-500" },
    { icon: Database, text: "Database Design", color: "text-purple-500" },
    { icon: Zap, text: "Performance", color: "text-yellow-500" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Enhanced Photo Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main photo container */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative w-96 h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-500 rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-background/95 backdrop-blur-sm flex items-center justify-center border border-border/50">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">
                          AK
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-foreground font-semibold text-lg">
                          Ajay Kumawat
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Backend Developer
                        </p>
                        <div className="flex justify-center space-x-2 mt-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-border/30 flex items-center justify-center"
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360, y: [0, -5, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-border/30 flex items-center justify-center"
              >
                <Server className="w-7 h-7 text-green-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 -left-12 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-border/30 flex items-center justify-center"
              >
                <Database className="w-6 h-6 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>Backend Developer</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <motion.p variants={itemVariants} className="text-foreground/80">
                I'm a passionate{" "}
                <span className="text-primary font-semibold">
                  Backend Developer
                </span>{" "}
                with{" "}
                <span className="text-primary font-semibold">1.5+ years</span>{" "}
                of experience building robust and scalable server-side
                applications. My expertise lies in the{" "}
                <span className="text-purple-500 font-semibold">
                  Node.js ecosystem
                </span>
                , where I've developed RESTful APIs, microservices, and
                database-driven applications.
              </motion.p>

              <motion.p variants={itemVariants}>
                I have a strong foundation in modern web technologies and enjoy
                solving complex problems through
                <span className="text-green-500 font-semibold">
                  {" "}
                  clean, efficient code
                </span>
                . My experience spans from designing database schemas to
                implementing authentication systems and optimizing application
                performance.
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-muted/30 rounded-2xl border border-border/50 hover:bg-muted/50 transition-colors backdrop-blur-sm"
                >
                  <div
                    className={`p-2 rounded-xl bg-background/50 ${highlight.color}`}
                  >
                    <highlight.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <motion.h3
                  className="text-3xl font-bold text-primary mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  1.5+
                </motion.h3>
                <p className="text-muted-foreground font-medium">
                  Years Experience
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl border border-green-500/20">
                <motion.h3
                  className="text-3xl font-bold text-green-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  15+
                </motion.h3>
                <p className="text-muted-foreground font-medium">
                  Projects Done
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl border border-purple-500/20">
                <motion.h3
                  className="text-3xl font-bold text-purple-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  24/7
                </motion.h3>
                <p className="text-muted-foreground font-medium">
                  Availability
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Let's Connect</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-background border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
