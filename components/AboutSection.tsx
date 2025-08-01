"use client";

import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  type TabKey = "story" | "expertise" | "approach";
  const [activeTab, setActiveTab] = useState<TabKey>("story");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "5+", label: "Years Backend Experience" },
    { number: "100+", label: "APIs Built" },
    { number: "50+", label: "Database Schemas" },
    { number: "99.9%", label: "System Uptime" },
  ];

  const tabs: { id: TabKey; label: string; icon: string }[] = [
    { id: "story", label: "My Journey", icon: "ri-server-line" },
    { id: "expertise", label: "Backend Expertise", icon: "ri-database-line" },
    { id: "approach", label: "My Approach", icon: "ri-code-s-slash-line" },
  ];

  const tabContent: Record<TabKey, { title: string; content: string }> = {
    story: {
      title: "Backend Development Journey",
      content: `I'm a passionate Backend Developer with over 5 years of experience building robust, scalable server-side applications and APIs. My journey began with a fascination for how data flows through systems, which evolved into expertise in designing and implementing complex backend architectures.

      I specialize in server-side technologies, database design, and cloud infrastructure. From microservices architecture to high-performance APIs, I've built systems that handle millions of requests and serve thousands of concurrent users. I also have basic knowledge of React and Angular for full-stack development when needed.`,
    },
    expertise: {
      title: "Backend Technologies & Skills",
      content: `My core expertise lies in backend development with Node.js, Python, and Java. I'm proficient in designing and optimizing databases including MongoDB, PostgreSQL, and MySQL. I have extensive experience with cloud platforms like AWS, Docker containerization, and Kubernetes orchestration.

      I excel at building RESTful APIs, GraphQL services, and real-time applications. My experience includes implementing authentication systems, payment gateways, message queues, and microservices architecture. I also have basic frontend skills with React and Angular for complete project understanding.`,
    },
    approach: {
      title: "Development Philosophy",
      content: `I believe in building scalable, maintainable backend systems that can grow with your business. My approach focuses on clean architecture, proper error handling, and comprehensive testing. I prioritize performance optimization and security best practices in every project.

      I follow agile methodologies and believe in continuous integration and deployment. My development process includes thorough documentation, code reviews, and monitoring systems. I'm committed to delivering reliable backend solutions that provide excellent API performance and user experience.`,
    },
  };
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-200/30 rounded-full filter blur-3xl"></div>
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
              Backend Development Expert
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized backend developer with expertise in server-side
              technologies, database design, and scalable system architecture
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl opacity-20 transform rotate-3"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20backend%20developer%20at%20workstation%2C%20Indian%20male%20developer%2C%20server%20monitoring%20dashboards%2C%20database%20management%20interface%2C%20multiple%20screens%20with%20code%20and%20system%20metrics%2C%20modern%20tech%20office%2C%20professional%20lighting%2C%20focused%20on%20backend%20development%2C%20contemporary%20workspace%20with%20server%20infrastructure&width=600&height=700&seq=about-backend-001&orientation=portrait"
                  alt="Backend Developer"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 filter blur-xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/50 text-gray-700 hover:bg-white/80"
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className={tab.icon}></i>
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {tabContent[activeTab].title}
              </h3>
              <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {tabContent[activeTab].content}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:ajay@example.com"
                className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                ajay@example.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center bg-white/50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/80 border border-white/20 cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
