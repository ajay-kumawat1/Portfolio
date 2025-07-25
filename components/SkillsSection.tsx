
'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: "ri-server-line",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", icon: "ri-nodejs-line" },
        { name: "Python", icon: "ri-python-line" },
        { name: "Java", icon: "ri-java-line" },
        { name: "PHP", icon: "ri-code-s-slash-line" },
        { name: "C#", icon: "ri-microsoft-line" },
        { name: "Go", icon: "ri-go-line" }
      ]
    },
    {
      title: "Databases",
      icon: "ri-database-line",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", icon: "ri-database-line" },
        { name: "PostgreSQL", icon: "ri-database-2-line" },
        { name: "MySQL", icon: "ri-database-line" },
        { name: "Redis", icon: "ri-flashlight-line" },
        { name: "Elasticsearch", icon: "ri-search-line" },
        { name: "SQLite", icon: "ri-file-list-line" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "ri-cloud-line",
      gradient: "from-purple-500 to-indigo-500",
      skills: [
        { name: "AWS", icon: "ri-amazon-line" },
        { name: "Docker", icon: "ri-docker-line" },
        { name: "Kubernetes", icon: "ri-settings-3-line" },
        { name: "Jenkins", icon: "ri-refresh-line" },
        { name: "Azure", icon: "ri-cloud-line" },
        { name: "Google Cloud", icon: "ri-google-line" }
      ]
    }
  ];

  const additionalSkills = [
    'REST APIs', 'GraphQL', 'Microservices', 'Message Queues', 'gRPC', 'WebSockets',
    'Apache Kafka', 'RabbitMQ', 'Nginx', 'Apache', 'Linux', 'Git', 'CI/CD', 'Testing'
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold mb-4 block">
              Backend Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building robust, scalable backend systems and APIs with modern technologies
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`transition-all duration-1000 delay-${categoryIndex * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4 shadow-lg`}>
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 ${
                        hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'shadow-lg' : ''
                      }`}>
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <i className={`${skill.icon} text-xl text-gray-300 group-hover:text-white transition-colors`}></i>
                          </div>
                        </div>
                        <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
