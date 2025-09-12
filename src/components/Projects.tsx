import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Server } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      id: 1,
      title: "E-Commerce REST API",
      description:
        "Scalable e-commerce backend with user authentication, product management, and payment processing.",
      image: "/project1.jpg", // Placeholder
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      githubUrl: "https://github.com/ajay-kumawat1/ecommerce-api",
      demoUrl: "https://ecommerce-api-demo.herokuapp.com",
      features: [
        "RESTful API design with proper status codes",
        "JWT-based authentication & authorization",
        "MongoDB aggregation for analytics",
        "Stripe payment integration",
        "Redis caching for performance",
      ],
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "Full-stack task management application with real-time updates and team collaboration features.",
      image: "/project2.jpg", // Placeholder
      technologies: [
        "Node.js",
        "Socket.io",
        "PostgreSQL",
        "React",
        "TypeScript",
      ],
      githubUrl: "https://github.com/ajay-kumawat1/task-manager",
      demoUrl: "https://task-manager-demo.vercel.app",
      features: [
        "Real-time collaboration with WebSockets",
        "PostgreSQL with complex queries",
        "Role-based access control",
        "File upload & attachment system",
        "Email notifications",
      ],
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description:
        "Distributed microservices system with Docker containers, API Gateway, and service discovery.",
      image: "/project3.jpg", // Placeholder
      technologies: ["Node.js", "Docker", "Nginx", "Redis", "MongoDB"],
      githubUrl: "https://github.com/ajay-kumawat1/microservices-demo",
      demoUrl: "https://microservices-demo.example.com",
      features: [
        "API Gateway with rate limiting",
        "Service-to-service communication",
        "Docker containerization",
        "Health checks & monitoring",
        "Horizontal scaling capabilities",
      ],
    },
  ];

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent backend projects showcasing my skills
              in API development, database design, and system architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 transition-colors"
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <Server className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Backend Project
                      </p>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-card-foreground">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
