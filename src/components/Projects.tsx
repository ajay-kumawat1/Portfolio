import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, memo, useCallback } from "react";
import {
  ExternalLink,
  Github,
  Database,
  Code2,
  Layers,
  ShoppingCart,
  Users,
  Network,
  Star,
  Eye,
  GitFork,
  Calendar,
  Award,
  Rocket,
} from "lucide-react";

// Animation variants
const VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  card: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

// Projects data
const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce REST API",
    subtitle: "Full-Stack E-Commerce Solution",
    description:
      "Enterprise-grade e-commerce backend with microservices architecture, advanced analytics, and seamless payment processing.",
    image: "/project1.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "Redis"],
    githubUrl: "https://github.com/ajay-kumawat1/ecommerce-api",
    demoUrl: "https://ecommerce-api-demo.herokuapp.com",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/5",
    borderColor: "border-green-500/20",
    status: "Production Ready",
    duration: "3 months",
    complexity: "Advanced",
    features: [
      "RESTful API design with proper status codes",
      "JWT-based authentication & authorization",
      "MongoDB aggregation for analytics",
      "Stripe payment integration",
      "Redis caching for performance",
      "Order management system",
      "Inventory tracking",
      "Admin dashboard API",
    ],
    stats: {
      stars: 45,
      forks: 12,
      views: 890,
    },
    highlights: ["99.9% Uptime", "500+ API Endpoints", "Real-time Analytics"],
  },
  {
    id: 2,
    title: "Task Management System",
    subtitle: "Real-time Collaboration Platform",
    description:
      "Modern task management platform with real-time collaboration, advanced project tracking, and team productivity analytics.",
    image: "/project2.jpg",
    technologies: [
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],
    githubUrl: "https://github.com/ajay-kumawat1/task-manager",
    demoUrl: "https://task-manager-demo.vercel.app",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    status: "Live Demo",
    duration: "4 months",
    complexity: "Intermediate",
    features: [
      "Real-time collaboration with WebSockets",
      "PostgreSQL with complex queries",
      "Role-based access control",
      "File upload & attachment system",
      "Email notifications",
      "Project timeline tracking",
      "Team performance metrics",
      "Kanban board interface",
    ],
    stats: {
      stars: 67,
      forks: 23,
      views: 1240,
    },
    highlights: [
      "Real-time Updates",
      "Multi-tenant Support",
      "Advanced Analytics",
    ],
  },
  {
    id: 3,
    title: "Microservices Architecture",
    subtitle: "Distributed System Design",
    description:
      "Scalable microservices ecosystem with container orchestration, service mesh, and comprehensive monitoring solutions.",
    image: "/project3.jpg",
    technologies: [
      "Node.js",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Redis",
      "MongoDB",
    ],
    githubUrl: "https://github.com/ajay-kumawat1/microservices-demo",
    demoUrl: "https://microservices-demo.example.com",
    icon: Network,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    status: "In Development",
    duration: "6 months",
    complexity: "Expert",
    features: [
      "API Gateway with rate limiting",
      "Service-to-service communication",
      "Docker containerization",
      "Health checks & monitoring",
      "Horizontal scaling capabilities",
      "Service discovery mechanism",
      "Distributed logging system",
      "Circuit breaker pattern",
    ],
    stats: {
      stars: 89,
      forks: 34,
      views: 2100,
    },
    highlights: ["Auto-scaling", "Service Mesh", "Zero Downtime"],
  },
] as const;

// Background Effects Component
const BackgroundEffects = memo(() => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
  </>
));

BackgroundEffects.displayName = "BackgroundEffects";

// Header Component
const ProjectsHeader = memo(() => (
  <motion.div
    variants={VARIANTS.item}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    <motion.div
      variants={VARIANTS.item}
      className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
    >
      <Rocket className="w-4 h-4" />
      <span>Featured Work</span>
    </motion.div>

    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
      <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </span>
    </h2>

    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
      Showcasing my expertise in
      <span className="text-primary font-semibold"> backend development</span>,
      <span className="text-green-500 font-semibold"> system architecture</span>
      , and
      <span className="text-purple-500 font-semibold">
        {" "}
        modern technologies
      </span>{" "}
      through real-world applications.
    </p>
  </motion.div>
));

ProjectsHeader.displayName = "ProjectsHeader";

// Project Visual Component
interface ProjectVisualProps {
  project: (typeof PROJECTS_DATA)[number];
  isHovered: boolean;
  index: number;
}

const ProjectVisual = memo(
  ({ project, isHovered, index }: ProjectVisualProps) => (
    <div
      className={`relative ${
        index % 2 === 0 ? "order-1" : "order-1 lg:order-2"
      }`}
    >
      <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        {/* Main Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-3xl bg-gradient-to-br ${project.color} shadow-2xl`}
          >
            <project.icon className="w-16 h-16 text-white" />
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-8 left-8 p-3 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50"
        >
          <Code2 className="w-6 h-6 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute top-8 right-8 p-3 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50"
        >
          <Database className="w-6 h-6 text-green-500" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-8 left-8 p-3 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50"
        >
          <Layers className="w-6 h-6 text-purple-500" />
        </motion.div>

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors border border-white/20"
            >
              <Github size={20} />
              <span className="font-medium">Code</span>
            </motion.a>
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-6 py-3 bg-primary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={20} />
              <span className="font-medium">Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
);

ProjectVisual.displayName = "ProjectVisual";

// Project Stats Component
interface ProjectStatsProps {
  stats: { stars: number; forks: number; views: number };
}

const ProjectStats = memo(({ stats }: ProjectStatsProps) => (
  <div className="grid grid-cols-3 gap-4 mb-8">
    <div className="text-center p-4 bg-muted/30 rounded-2xl border border-border/50">
      <div className="flex items-center justify-center mb-2">
        <Star className="w-5 h-5 text-yellow-500 mr-1" />
        <span className="font-bold text-foreground">{stats.stars}</span>
      </div>
      <p className="text-sm text-muted-foreground">Stars</p>
    </div>
    <div className="text-center p-4 bg-muted/30 rounded-2xl border border-border/50">
      <div className="flex items-center justify-center mb-2">
        <GitFork className="w-5 h-5 text-blue-500 mr-1" />
        <span className="font-bold text-foreground">{stats.forks}</span>
      </div>
      <p className="text-sm text-muted-foreground">Forks</p>
    </div>
    <div className="text-center p-4 bg-muted/30 rounded-2xl border border-border/50">
      <div className="flex items-center justify-center mb-2">
        <Eye className="w-5 h-5 text-green-500 mr-1" />
        <span className="font-bold text-foreground">{stats.views}</span>
      </div>
      <p className="text-sm text-muted-foreground">Views</p>
    </div>
  </div>
));

ProjectStats.displayName = "ProjectStats";

// Project Technologies Component
interface ProjectTechnologiesProps {
  technologies: readonly string[];
  color: string;
}

const ProjectTechnologies = memo(
  ({ technologies, color }: ProjectTechnologiesProps) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-foreground mb-4">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            variants={VARIANTS.item}
            transition={{ delay: techIndex * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`px-4 py-2 bg-gradient-to-r ${color} text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer`}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  )
);

ProjectTechnologies.displayName = "ProjectTechnologies";

// Project Highlights Component
interface ProjectHighlightsProps {
  highlights: readonly string[];
  color: string;
}

const ProjectHighlights = memo(
  ({ highlights, color }: ProjectHighlightsProps) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-foreground mb-4">
        Key Highlights
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={idx}
            variants={VARIANTS.item}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center space-x-3 p-3 bg-muted/20 rounded-xl border border-border/30"
          >
            <div className={`p-2 rounded-lg bg-gradient-to-br ${color}`}>
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
);

ProjectHighlights.displayName = "ProjectHighlights";

// Project Action Buttons Component
interface ProjectActionButtonsProps {
  githubUrl: string;
  demoUrl: string;
  color: string;
}

const ProjectActionButtons = memo(
  ({ githubUrl, demoUrl, color }: ProjectActionButtonsProps) => (
    <div className="flex flex-wrap gap-4">
      <motion.a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-6 py-3 bg-background border-2 border-foreground/20 text-foreground rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
      >
        <Github size={20} />
        <span>View Code</span>
      </motion.a>
      <motion.a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow`}
      >
        <ExternalLink size={20} />
        <span>Live Demo</span>
      </motion.a>
    </div>
  )
);

ProjectActionButtons.displayName = "ProjectActionButtons";

// Project Content Component
interface ProjectContentProps {
  project: (typeof PROJECTS_DATA)[number];
  index: number;
}

const ProjectContent = memo(({ project, index }: ProjectContentProps) => (
  <div
    className={`p-8 lg:p-12 ${
      index % 2 === 0 ? "order-2" : "order-2 lg:order-1"
    }`}
  >
    {/* Status and Duration */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <span
          className={`px-3 py-1 ${project.bgColor} text-current rounded-full text-sm font-medium border ${project.borderColor}`}
        >
          {project.status}
        </span>
        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
          <Calendar className="w-4 h-4" />
          <span>{project.duration}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
        <Award className="w-4 h-4" />
        <span>{project.complexity}</span>
      </div>
    </div>

    {/* Title and Subtitle */}
    <div className="mb-6">
      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-lg text-muted-foreground font-medium">
        {project.subtitle}
      </p>
    </div>

    {/* Description */}
    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
      {project.description}
    </p>

    {/* GitHub Stats */}
    <ProjectStats stats={project.stats} />

    {/* Technologies */}
    <ProjectTechnologies
      technologies={project.technologies}
      color={project.color}
    />

    {/* Key Highlights */}
    <ProjectHighlights highlights={project.highlights} color={project.color} />

    {/* Action Buttons */}
    <ProjectActionButtons
      githubUrl={project.githubUrl}
      demoUrl={project.demoUrl}
      color={project.color}
    />
  </div>
));

ProjectContent.displayName = "ProjectContent";

// Project Card Component
interface ProjectCardProps {
  project: (typeof PROJECTS_DATA)[number];
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectCard = memo(
  ({
    project,
    index,
    isHovered,
    onHoverStart,
    onHoverEnd,
  }: ProjectCardProps) => (
    <motion.div
      variants={VARIANTS.card}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`group relative bg-background/50 backdrop-blur-sm rounded-3xl border ${project.borderColor} hover:border-opacity-70 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div
        className={`grid grid-cols-1 ${
          index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
        } gap-0`}
      >
        <ProjectVisual project={project} isHovered={isHovered} index={index} />
        <ProjectContent project={project} index={index} />
      </div>
    </motion.div>
  )
);

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleHoverStart = useCallback((id: number) => {
    setHoveredProject(id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <BackgroundEffects />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={VARIANTS.container}
        >
          <ProjectsHeader />

          {/* Projects Grid */}
          <div className="space-y-12">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHoverStart={() => handleHoverStart(project.id)}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects);
