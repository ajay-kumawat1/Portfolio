
'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "ri-server-line",
      skills: ["Node.js", "Python", "Java", "PHP", "C#", "Go", "Express.js", "Django"]
    },
    {
      title: "Databases",
      icon: "ri-database-line",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "SQLite", "Oracle", "Cassandra"]
    },
    {
      title: "DevOps & Cloud",
      icon: "ri-cloud-line",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Azure", "Google Cloud", "Terraform", "Ansible"]
    }
  ];

  const additionalSkills = [
    "REST APIs", "GraphQL", "Microservices", "Message Queues", "gRPC", "WebSockets",
    "Apache Kafka", "RabbitMQ", "Nginx", "Apache", "Linux", "Git", "CI/CD", "Testing",
    "Load Balancing", "Caching", "Security", "Monitoring"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Backend Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized in building robust, scalable backend systems and APIs with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className={`${category.icon} text-xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-300 rounded-full px-5 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
