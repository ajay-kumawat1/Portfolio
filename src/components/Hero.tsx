import { motion } from "framer-motion";
import { FileDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4"
          >
            Ajay Kumawat
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6"
          >
            Backend Developer — Node.js
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground mb-8"
          >
            Building scalable backend systems and APIs with 1.5+ years of
            experience in Node.js, Express, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              <FileDown className="mr-2 h-4 w-4" />
              View Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-border text-base font-medium rounded-md text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/ajay-kumawat1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ajay-kumawat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href="mailto:ajay.kumawat@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-96 h-96 border border-primary/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-10 left-10 w-80 h-80 border border-primary/5 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
