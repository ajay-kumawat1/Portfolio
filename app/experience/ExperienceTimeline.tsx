'use client';

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechVision Solutions",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Built microservices architecture serving 100k+ users",
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers in agile environment",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      description: "Developed responsive web applications and RESTful APIs for various client projects.",
      achievements: [
        "Delivered 15+ successful projects for enterprise clients",
        "Integrated payment gateways and third-party APIs",
        "Improved code quality through automated testing",
        "Collaborated with design team for pixel-perfect implementations"
      ]
    },
    {
      role: "Frontend Developer",
      company: "StartupHub Technologies",
      period: "2019 - 2020",
      description: "Focused on creating intuitive user interfaces and improving user experience.",
      achievements: [
        "Converted designs to responsive React components",
        "Implemented state management with Redux",
        "Optimized bundle size reducing load time by 25%",
        "Maintained cross-browser compatibility"
      ]
    },
    {
      role: "Junior Web Developer",
      company: "WebCraft Solutions",
      period: "2018 - 2019",
      description: "Started my career building websites and learning modern web development practices.",
      achievements: [
        "Developed 20+ responsive websites using HTML, CSS, JavaScript",
        "Learned React and modern development workflows",
        "Contributed to open-source projects",
        "Gained experience with version control and deployment"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}