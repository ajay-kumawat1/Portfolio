
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Backend Developer",
    "API Architect", 
    "Database Designer",
    "System Engineer"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold mb-2 block">
                Hello, I'm Ajay Kumawat
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Backend
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
                <span className="inline-block transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Specializing in building robust, scalable backend systems and APIs. 
              Expert in server-side technologies, database design, and cloud architecture 
              with basic knowledge of React and Angular for full-stack capabilities.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 shadow-lg"
              >
                <div className="w-5 h-5 inline-flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 cursor-pointer whitespace-nowrap transform hover:scale-105"
              >
                <div className="w-5 h-5 inline-flex items-center justify-center mr-2">
                  <i className="ri-eye-line"></i>
                </div>
                View My Work
              </a>
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl opacity-20 transform rotate-3 animate-pulse"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20backend%20developer%20working%20on%20server%20infrastructure%2C%20Indian%20male%20developer%2C%20modern%20data%20center%20environment%2C%20multiple%20servers%20and%20screens%2C%20coding%20on%20terminal%2C%20database%20management%2C%20cloud%20computing%20setup%2C%20professional%20tech%20workspace%2C%20focused%20concentration%2C%20contemporary%20lighting%2C%20high-tech%20atmosphere&width=600&height=700&seq=backend-hero-001&orientation=portrait"
                  alt="Backend Developer"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 filter blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
