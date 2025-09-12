import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Code, GitBranch } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 75 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 70 },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Mongoose", level: 85 },
      ],
    },
    {
      title: "Frontend Skills",
      icon: Code,
      skills: [
        { name: "React", level: 80 },
        { name: "Angular", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "TailwindCSS", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 75 },
        { name: "Nginx", level: 70 },
      ],
    },
  ];

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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical expertise spans across backend development,
              databases, frontend technologies, and DevOps tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Badges */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "GraphQL",
                "JWT",
                "OAuth",
                "WebSockets",
                "Microservices",
                "CI/CD",
                "Testing",
                "Agile",
                "SCRUM",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
