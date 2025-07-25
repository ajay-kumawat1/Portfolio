
'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior Backend Developer",
      company: "TechVision Solutions",
      period: "2022 - Present",
      description: "Leading backend development of scalable applications and API architecture design for enterprise clients.",
      achievements: [
        "Built microservices architecture serving 500K+ requests/day",
        "Designed and optimized database schemas for improved performance",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Led backend team of 6 developers in agile environment"
      ]
    },
    {
      role: "Backend Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      description: "Developed robust RESTful APIs and database systems for various client applications and platforms.",
      achievements: [
        "Built 25+ REST APIs with comprehensive documentation",
        "Integrated payment gateways and third-party services",
        "Optimized database queries improving response time by 50%",
        "Implemented authentication and authorization systems"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "StartupHub Technologies",
      period: "2019 - 2020",
      description: "Worked on both frontend and backend development with focus on API development and database design.",
      achievements: [
        "Developed backend APIs using Node.js and Express",
        "Created database schemas and optimized queries",
        "Built responsive frontends with React and Angular",
        "Implemented real-time features using WebSockets"
      ]
    },
    {
      role: "Junior Backend Developer",
      company: "WebCraft Solutions",
      period: "2018 - 2019",
      description: "Started backend development career focusing on server-side programming and database management.",
      achievements: [
        "Developed 15+ backend APIs for web applications",
        "Learned advanced database design and optimization",
        "Gained experience with cloud services and deployment",
        "Contributed to backend architecture documentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Backend Development Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in backend development and server-side technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="ml-8 flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-4 h-4 flex items-center justify-center mt-1 mr-3">
                            <i className="ri-check-line text-green-600 text-sm"></i>
                          </div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}