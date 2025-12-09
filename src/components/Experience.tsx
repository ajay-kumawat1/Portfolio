import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

// Animation variants - optimized for fast rendering
const VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  item: {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  },
} as const;

// Experience data
const EXPERIENCES = [
  {
    id: 1,
    company: "TechCorp Solutions",
    role: "Backend Developer",
    location: "Mumbai, India",
    duration: "Jan 2023 - Present",
    type: "Full-time",
    website: "https://techcorp.example.com",
    achievements: [
      "Developed and maintained 5+ RESTful APIs serving 10K+ daily active users",
      "Optimized database queries reducing response time by 40% and improving user experience",
      "Implemented microservices architecture that improved system scalability by 60%",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "AWS"],
  },
  {
    id: 2,
    company: "StartupHub",
    role: "Junior Full Stack Developer",
    location: "Bangalore, India",
    duration: "Jun 2022 - Dec 2022",
    type: "Full-time",
    website: "https://startuphub.example.com",
    achievements: [
      "Built end-to-end features for web applications using Node.js and React",
      "Collaborated with cross-functional teams to deliver 3 major product releases",
      "Implemented authentication system using JWT and OAuth2.0 protocols",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "TypeScript", "Git"],
  },
  {
    id: 3,
    company: "FreelanceWork",
    role: "Backend Developer",
    location: "Remote",
    duration: "Jan 2022 - May 2022",
    type: "Contract",
    website: null,
    achievements: [
      "Delivered custom backend solutions for 5+ clients across different industries",
      "Integrated third-party APIs including payment gateways and social media platforms",
      "Mentored junior developers on best practices for API development and testing",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Heroku"],
  },
] as const;

// Company Header Component
interface CompanyHeaderProps {
  role: string;
  company: string;
  type: string;
  website: string | null;
  duration: string;
  location: string;
}

const CompanyHeader = memo(
  ({
    role,
    company,
    type,
    website,
    duration,
    location,
  }: CompanyHeaderProps) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-card-foreground">{role}</h3>
        <div className="flex items-center space-x-2 text-primary">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              {company}
              <ExternalLink size={14} className="ml-1" />
            </a>
          ) : (
            <span>{company}</span>
          )}
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{type}</span>
        </div>
      </div>

      <div className="flex flex-col sm:items-end mt-2 sm:mt-0 space-y-1">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={14} className="mr-1" />
          {duration}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>
      </div>
    </div>
  )
);

CompanyHeader.displayName = "CompanyHeader";

// Achievements List Component
interface AchievementsListProps {
  achievements: readonly string[];
}

const AchievementsList = memo(({ achievements }: AchievementsListProps) => (
  <ul className="space-y-2 mb-4">
    {achievements.map((achievement, idx) => (
      <li key={idx} className="flex items-start text-muted-foreground">
        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
        {achievement}
      </li>
    ))}
  </ul>
));

AchievementsList.displayName = "AchievementsList";

// Technologies Component
interface TechnologiesProps {
  technologies: readonly string[];
}

const Technologies = memo(({ technologies }: TechnologiesProps) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
      >
        {tech}
      </span>
    ))}
  </div>
));

Technologies.displayName = "Technologies";

// Experience Card Component
interface ExperienceCardProps {
  experience: (typeof EXPERIENCES)[number];
  index: number;
}

const ExperienceCard = memo(({ experience, index }: ExperienceCardProps) => (
  <motion.div
    variants={VARIANTS.item}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`relative flex items-center ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
    {/* Timeline dot */}
    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>

    {/* Content */}
    <div
      className={`flex-1 ${
        index % 2 === 0 ? "md:pr-8 pl-12" : "md:pl-8 pl-12"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-colors"
      >
        <CompanyHeader
          role={experience.role}
          company={experience.company}
          type={experience.type}
          website={experience.website}
          duration={experience.duration}
          location={experience.location}
        />

        <AchievementsList achievements={experience.achievements} />

        <Technologies technologies={experience.technologies} />
      </motion.div>
    </div>

    {/* Empty space for alternating layout */}
    <div className="hidden md:block flex-1"></div>
  </motion.div>
));

ExperienceCard.displayName = "ExperienceCard";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={VARIANTS.container}
        >
          <motion.div
            variants={VARIANTS.item}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey as a backend developer, building scalable systems and
              solving complex problems.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Experience);
