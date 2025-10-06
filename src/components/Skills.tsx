import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Database,
  Code,
  GitBranch,
  FileCode,
  Settings,
  Globe,
  Terminal,
  Box,
  Cloud,
  Monitor,
  HardDrive,
  Star,
  Trophy,
  Zap,
  Target,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        {
          name: "Node.js",
          icon: FileCode,
          level: 95,
          experience: "1.5+ years",
        },
        {
          name: "Express.js",
          icon: Server,
          level: 90,
          experience: "1.5+ years",
        },
        { name: "NestJS", icon: Settings, level: 85, experience: "1 year" },
        { name: "TypeScript", icon: Code, level: 88, experience: "1+ year" },
        { name: "JavaScript", icon: Code, level: 92, experience: "2+ years" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        {
          name: "MongoDB",
          icon: Database,
          level: 90,
          experience: "1.5+ years",
        },
        {
          name: "PostgreSQL",
          icon: Database,
          level: 82,
          experience: "8 months",
        },
        { name: "MySQL", icon: Database, level: 78, experience: "6 months" },
        { name: "Redis", icon: HardDrive, level: 75, experience: "6 months" },
        {
          name: "Mongoose",
          icon: Settings,
          level: 88,
          experience: "1.5+ years",
        },
      ],
    },
    {
      title: "Frontend Skills",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "React", icon: Code, level: 85, experience: "1 year" },
        { name: "Angular", icon: Globe, level: 70, experience: "6 months" },
        { name: "HTML/CSS", icon: Monitor, level: 90, experience: "2+ years" },
        {
          name: "TailwindCSS",
          icon: Settings,
          level: 88,
          experience: "1 year",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "Docker", icon: Box, level: 80, experience: "8 months" },
        { name: "Git", icon: GitBranch, level: 92, experience: "2+ years" },
        { name: "AWS", icon: Cloud, level: 75, experience: "6 months" },
        { name: "Linux", icon: Terminal, level: 85, experience: "1+ year" },
        { name: "Nginx", icon: Server, level: 78, experience: "8 months" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Technical Expertise</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>

            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              My technical expertise spans across modern web technologies, with
              a focus on
              <span className="text-primary font-semibold">
                {" "}
                backend development
              </span>
              ,
              <span className="text-green-500 font-semibold">
                {" "}
                database management
              </span>
              , and
              <span className="text-purple-500 font-semibold">
                {" "}
                cloud infrastructure
              </span>
              .
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative bg-background/50 backdrop-blur-sm p-8 rounded-3xl border ${category.borderColor} hover:border-opacity-50 transition-all duration-500 hover:shadow-2xl hover:shadow-current/10`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg mr-4`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${category.bgColor} group-hover/skill:scale-110 transition-transform`}
                          >
                            <skill.icon className="h-5 w-5 text-current" />
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {skill.experience}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Star,
                value: "20+",
                label: "Technologies",
                color: "text-yellow-500",
              },
              {
                icon: Trophy,
                value: "15+",
                label: "Projects",
                color: "text-green-500",
              },
              {
                icon: Target,
                value: "95%",
                label: "Accuracy",
                color: "text-blue-500",
              },
              {
                icon: Zap,
                value: "1.5+",
                label: "Years Exp",
                color: "text-purple-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div
                  className={`inline-flex p-3 rounded-2xl bg-muted/50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <motion.h4
                  className="text-2xl font-bold text-foreground mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Technologies */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Additional <span className="text-primary">Technologies</span>
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "REST APIs", color: "from-blue-500 to-cyan-500" },
                { name: "GraphQL", color: "from-pink-500 to-purple-500" },
                { name: "JWT", color: "from-green-500 to-emerald-500" },
                { name: "OAuth", color: "from-orange-500 to-red-500" },
                { name: "WebSockets", color: "from-indigo-500 to-blue-500" },
                { name: "Microservices", color: "from-purple-500 to-pink-500" },
                { name: "CI/CD", color: "from-yellow-500 to-orange-500" },
                { name: "Testing", color: "from-green-500 to-blue-500" },
                { name: "Agile", color: "from-red-500 to-pink-500" },
                { name: "SCRUM", color: "from-blue-500 to-purple-500" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 },
                  }}
                  className={`relative px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer group`}
                >
                  <span className="relative z-10">{tech.name}</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
