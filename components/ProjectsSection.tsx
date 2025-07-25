"use client";

import { useState, useEffect } from "react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Backend API",
      description:
        "Scalable REST API for e-commerce platform with microservices architecture, payment processing, inventory management, and real-time notifications.",
      image:
        "https://readdy.ai/api/search-image?query=E-commerce%20backend%20API%20architecture%20diagram%2C%20microservices%20design%2C%20database%20schema%20visualization%2C%20payment%20processing%20system%2C%20inventory%20management%2C%20real-time%20notifications%2C%20server%20infrastructure%2C%20scalable%20backend%20system%2C%20API%20endpoints%20documentation%2C%20modern%20tech%20architecture&width=800&height=600&seq=backend-project-001&orientation=landscape",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Stripe"],
      category: "Backend",
      liveDemo: "https://api-ecommerce.example.com/docs",
      sourceCode: "https://github.com/ajaykumawat/ecommerce-backend",
      featured: true,
      stats: { requests: "1M+", uptime: "99.9%", endpoints: "50+" },
    },
    {
      id: 2,
      title: "Real-Time Chat Backend",
      description:
        "WebSocket-based chat system with message queuing, user authentication, file sharing, and scalable room management for instant messaging.",
      image:
        "https://readdy.ai/api/search-image?query=Real-time%20chat%20backend%20system%20architecture%2C%20WebSocket%20connections%2C%20message%20queuing%20system%2C%20user%20authentication%2C%20file%20sharing%20infrastructure%2C%20scalable%20room%20management%2C%20instant%20messaging%20backend%2C%20server-side%20architecture%2C%20database%20design%2C%20modern%20messaging%20system&width=800&height=600&seq=backend-project-002&orientation=landscape",
      tech: ["Socket.io", "Node.js", "PostgreSQL", "Redis", "AWS S3", "JWT"],
      category: "Backend",
      liveDemo: "https://chat-api.example.com",
      sourceCode: "https://github.com/ajaykumawat/chat-backend",
      featured: true,
      stats: { messages: "10M+", users: "50K+", rooms: "1K+" },
    },
    {
      id: 3,
      title: "Financial Analytics API",
      description:
        "High-performance API for financial data processing with real-time market data, portfolio tracking, and advanced analytics capabilities.",
      image:
        "https://readdy.ai/api/search-image?query=Financial%20analytics%20API%20backend%20system%2C%20market%20data%20processing%2C%20portfolio%20tracking%20architecture%2C%20real-time%20financial%20data%2C%20analytics%20dashboard%20backend%2C%20database%20optimization%2C%20financial%20algorithms%2C%20trading%20system%20backend%2C%20performance%20monitoring%2C%20scalable%20financial%20infrastructure&width=800&height=600&seq=backend-project-003&orientation=landscape",
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Redis",
      ],
      category: "Backend",
      liveDemo: "https://finapi.example.com",
      sourceCode: "https://github.com/ajaykumawat/financial-api",
      featured: false,
      stats: { trades: "1M+", latency: "10ms", accuracy: "99.5%" },
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description:
        "Full-stack task management application with React frontend and Node.js backend, featuring real-time updates and team collaboration.",
      image:
        "https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%2C%20project%20dashboard%2C%20team%20collaboration%20tools%2C%20kanban%20board%2C%20task%20tracking%20system%2C%20modern%20web%20application%2C%20productivity%20app%20design%2C%20clean%20interface%2C%20organized%20layout%2C%20professional%20dashboard%20design&width=800&height=600&seq=fullstack-project-004&orientation=landscape",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Material-UI"],
      category: "Full Stack",
      liveDemo: "https://taskmanager.example.com",
      sourceCode: "https://github.com/ajaykumawat/task-manager",
      featured: false,
      stats: { tasks: "100K+", teams: "500+", productivity: "85%" },
    },
    {
      id: 5,
      title: "Microservices Order System",
      description:
        "Distributed order processing system with event-driven architecture, saga pattern implementation, and comprehensive monitoring.",
      image:
        "https://readdy.ai/api/search-image?query=Microservices%20architecture%20diagram%2C%20order%20processing%20system%2C%20event-driven%20architecture%2C%20saga%20pattern%2C%20distributed%20system%20design%2C%20service%20mesh%2C%20API%20gateway%2C%20monitoring%20dashboard%2C%20scalable%20backend%20infrastructure%2C%20container%20orchestration%2C%20modern%20system%20architecture&width=800&height=600&seq=backend-project-005&orientation=landscape",
      tech: [
        "Node.js",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "MongoDB",
        "Prometheus",
      ],
      category: "Backend",
      liveDemo: "https://orders-api.example.com",
      sourceCode: "https://github.com/ajaykumawat/microservices-orders",
      featured: true,
      stats: { orders: "500K+", services: "12", uptime: "99.99%" },
    },
    {
      id: 6,
      title: "Inventory Management Portal",
      description:
        "Angular-based inventory management system with Node.js backend, featuring barcode scanning, automated reordering, and analytics.",
      image:
        "https://readdy.ai/api/search-image?query=Inventory%20management%20system%20interface%2C%20warehouse%20management%20dashboard%2C%20barcode%20scanning%2C%20automated%20reordering%2C%20analytics%20charts%2C%20stock%20tracking%2C%20supply%20chain%20management%2C%20modern%20web%20application%2C%20professional%20interface%2C%20data%20visualization&width=800&height=600&seq=fullstack-project-006&orientation=landscape",
      tech: [
        "Angular",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
        "Chart.js",
        "JWT",
      ],
      category: "Full Stack",
      liveDemo: "https://inventory.example.com",
      sourceCode: "https://github.com/ajaykumawat/inventory-system",
      featured: false,
      stats: { products: "10K+", warehouses: "50+", accuracy: "99.8%" },
    },
  ];

  const categories = ["All", "Backend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-4 block">
              Backend Development Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust backend systems and APIs built with modern technologies and
              best practices
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-1000 delay-${
                  index * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocus={() => setHoveredProject(project.id)}
                onBlur={() => setHoveredProject(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setHoveredProject(project.id);
                  }
                  if (e.key === "Escape") {
                    setHoveredProject(null);
                  }
                }}
                aria-label={`Project card: ${project.title}`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 transform hover:scale-105 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(
                        ([key, value], statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-lg font-bold text-gray-900">
                              {value}
                            </div>
                            <div className="text-sm text-gray-500 capitalize">
                              {key}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap transform hover:scale-105 shadow-lg"
                      >
                        <div className="w-4 h-4 inline-flex items-center justify-center mr-2">
                          <i className="ri-external-link-line"></i>
                        </div>
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/50 border border-gray-200 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-xl font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap transform hover:scale-105"
                      >
                        <div className="w-4 h-4 inline-flex items-center justify-center mr-2">
                          <i className="ri-github-line"></i>
                        </div>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 delay-${
                index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 transform hover:scale-102 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap text-sm transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-200 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center cursor-pointer whitespace-nowrap text-sm transform hover:scale-105"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
