import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        AK
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Professional photo
                      <br />
                      placeholder
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Backend Developer with 1.5+ years of
                  experience building robust and scalable server-side
                  applications. My expertise lies in Node.js ecosystem, where
                  I've developed RESTful APIs, microservices, and
                  database-driven applications.
                </p>
                <p>
                  I have a strong foundation in modern web technologies and
                  enjoy solving complex problems through clean, efficient code.
                  My experience spans from designing database schemas to
                  implementing authentication systems and optimizing application
                  performance.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies,
                  contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h3 className="text-2xl font-bold text-primary">1.5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
