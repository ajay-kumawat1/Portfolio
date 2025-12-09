import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
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
  Sparkles,
} from "lucide-react";

// Animation variants - optimized for fast rendering
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  },
  fadeIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25 },
    },
  },
} as const;

const SKILL_CATEGORIES = [
  {
    title: "Backend Technologies",
    icon: Server,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGlow: "bg-blue-500/10",
    borderGlow: "hover:shadow-blue-500/20",
    skills: [
      { name: "Node.js", icon: FileCode, experience: "1.5+ years", level: 95 },
      { name: "Express.js", icon: Server, experience: "1.5+ years", level: 90 },
      { name: "NestJS", icon: Settings, experience: "1 year", level: 85 },
      { name: "TypeScript", icon: Code, experience: "1+ year", level: 88 },
      { name: "JavaScript", icon: Code, experience: "2+ years", level: 92 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    gradient: "from-green-500 via-emerald-600 to-teal-500",
    bgGlow: "bg-green-500/10",
    borderGlow: "hover:shadow-green-500/20",
    skills: [
      { name: "MongoDB", icon: Database, experience: "1.5+ years", level: 90 },
      { name: "PostgreSQL", icon: Database, experience: "8 months", level: 82 },
      { name: "MySQL", icon: Database, experience: "6 months", level: 78 },
      { name: "Redis", icon: HardDrive, experience: "6 months", level: 75 },
      { name: "Mongoose", icon: Settings, experience: "1.5+ years", level: 88 },
    ],
  },
  {
    title: "Frontend Skills",
    icon: Code,
    gradient: "from-purple-500 via-pink-600 to-rose-500",
    bgGlow: "bg-purple-500/10",
    borderGlow: "hover:shadow-purple-500/20",
    skills: [
      { name: "React", icon: Code, experience: "1 year", level: 85 },
      { name: "Angular", icon: Globe, experience: "6 months", level: 70 },
      { name: "HTML/CSS", icon: Monitor, experience: "2+ years", level: 90 },
      { name: "TailwindCSS", icon: Settings, experience: "1 year", level: 88 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    gradient: "from-orange-500 via-red-600 to-pink-500",
    bgGlow: "bg-orange-500/10",
    borderGlow: "hover:shadow-orange-500/20",
    skills: [
      { name: "Docker", icon: Box, experience: "8 months", level: 80 },
      { name: "Git", icon: GitBranch, experience: "2+ years", level: 92 },
      { name: "AWS", icon: Cloud, experience: "6 months", level: 75 },
      { name: "Linux", icon: Terminal, experience: "1+ year", level: 85 },
      { name: "Nginx", icon: Server, experience: "8 months", level: 78 },
    ],
  },
] as const;

const STATS = [
  {
    icon: Star,
    value: "20+",
    label: "Technologies",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Trophy,
    value: "15+",
    label: "Projects",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Target,
    value: "95%",
    label: "Accuracy",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Zap,
    value: "1.5+",
    label: "Years Exp",
    gradient: "from-purple-400 to-pink-500",
  },
] as const;

const ADDITIONAL_TECH = [
  { name: "REST APIs", gradient: "from-blue-500 to-cyan-500" },
  { name: "GraphQL", gradient: "from-pink-500 to-purple-500" },
  { name: "JWT", gradient: "from-green-500 to-emerald-500" },
  { name: "OAuth", gradient: "from-orange-500 to-red-500" },
  { name: "WebSockets", gradient: "from-indigo-500 to-blue-500" },
  { name: "Microservices", gradient: "from-purple-500 to-pink-500" },
  { name: "CI/CD", gradient: "from-yellow-500 to-orange-500" },
  { name: "Testing", gradient: "from-green-500 to-blue-500" },
  { name: "Agile", gradient: "from-red-500 to-pink-500" },
  { name: "SCRUM", gradient: "from-blue-500 to-purple-500" },
] as const;

// Background Effects Component
const BackgroundEffects = memo(() => (
  <>
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
    />
  </>
));

BackgroundEffects.displayName = "BackgroundEffects";

// Skills Header Component
const SkillsHeader = memo(() => (
  <motion.div variants={ANIMATION_VARIANTS.item} className="text-center mb-20">
    <motion.div
      variants={ANIMATION_VARIANTS.fadeIn}
      className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20"
    >
      <Zap className="w-5 h-5" />
      <span>Technical Expertise</span>
    </motion.div>

    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
      <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Skills & Technologies
      </span>
    </h2>

    <p className="text-foreground/80 max-w-3xl mx-auto text-xl leading-relaxed">
      My technical expertise spans across modern web technologies, with a focus
      on <span className="text-primary font-semibold">backend development</span>
      ,{" "}
      <span className="text-green-500 font-semibold">database management</span>,
      and{" "}
      <span className="text-purple-500 font-semibold">
        cloud infrastructure
      </span>
      .
    </p>
  </motion.div>
));

SkillsHeader.displayName = "SkillsHeader";

// Stat Card Component
interface StatCardProps {
  stat: (typeof STATS)[number];
  index: number;
}

const StatCard = memo(({ stat, index }: StatCardProps) => {
  const StatIcon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative text-center p-8 bg-card/40 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <motion.div
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.6 }}
        className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-xl`}
      >
        <StatIcon className="w-7 h-7 text-white" />
      </motion.div>

      <motion.h4
        className={`relative text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      >
        {stat.value}
      </motion.h4>

      <p className="relative text-sm text-foreground/70 font-semibold uppercase tracking-wider">
        {stat.label}
      </p>
    </motion.div>
  );
});

StatCard.displayName = "StatCard";

// Additional Tech Tag Component
interface AdditionalTechTagProps {
  tech: (typeof ADDITIONAL_TECH)[number];
  index: number;
}

const AdditionalTechTag = memo(({ tech, index }: AdditionalTechTagProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.15,
      rotate: [0, -3, 3, 0],
      transition: { duration: 0.4 },
    }}
    className="group relative"
  >
    <div
      className={`relative px-8 py-4 bg-gradient-to-r ${tech.gradient} text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      <span className="relative z-10 text-base">{tech.name}</span>
      <motion.div
        className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"
        whileHover={{ scale: 1.5 }}
      />
    </div>
  </motion.div>
));

AdditionalTechTag.displayName = "AdditionalTechTag";

// Skill Category Card Component
const SkillCard = memo(
  ({
    category,
    index,
  }: {
    category: (typeof SKILL_CATEGORIES)[number];
    index: number;
  }) => {
    const Icon = category.icon;

    return (
      <motion.div
        variants={ANIMATION_VARIANTS.item}
        whileHover={{ y: -8, scale: 1.02 }}
        className={`group relative bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 ${category.borderGlow} hover:shadow-2xl overflow-hidden`}
      >
        {/* Gradient background on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Decorative corner */}
        <motion.div
          className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />

        {/* Header */}
        <div className="relative flex items-center mb-8">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-xl mr-4 group-hover:shadow-2xl`}
          >
            <Icon className="h-8 w-8 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {category.skills.length} Technologies
            </p>
          </div>
        </div>

        {/* Skills List */}
        <div className="relative space-y-3">
          {category.skills.map((skill, skillIndex) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
                className="group/skill"
              >
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`p-2.5 rounded-lg ${category.bgGlow} border border-border/30`}
                    >
                      <SkillIcon className="h-5 w-5 text-foreground" />
                    </motion.div>
                    <div>
                      <span className="font-semibold text-foreground text-base">
                        {skill.name}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {skill.experience}
                      </p>
                    </div>
                  </div>

                  {/* Proficiency indicator */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 + i * 0.05 }}
                        viewport={{ once: true }}
                        className={`w-1.5 h-6 rounded-full ${
                          i < Math.floor(skill.level / 20)
                            ? `bg-gradient-to-t ${category.gradient}`
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }
);

SkillCard.displayName = "SkillCard";

const Skills = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background"
    >
      <BackgroundEffects />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.container}
        >
          {/* Header Section */}
          <SkillsHeader />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {SKILL_CATEGORIES.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>

          {/* Additional Technologies */}
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-foreground mb-10">
              Additional <span className="text-primary">Technologies</span>
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {ADDITIONAL_TECH.map((tech, index) => (
                <AdditionalTechTag key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
