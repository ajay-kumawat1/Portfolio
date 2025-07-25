'use client';

export default function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Web Developer with 5+ years of experience building 
              modern, scalable web applications. I love turning complex problems into simple, 
              beautiful solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              My expertise spans across frontend and backend technologies, with a focus on 
              React, Node.js, and cloud architecture. I'm always eager to learn new technologies 
              and best practices to deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-700">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line text-blue-600"></i>
                </div>
                <span>Jaipur, India</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line text-blue-600"></i>
                </div>
                <span>ajay@example.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line text-blue-600"></i>
                </div>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20software%20developer%2C%20male%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20lighting%2C%20clean%20backdrop%2C%20business%20casual%20attire%2C%20approachable%20demeanor%2C%20tech%20industry%20professional%20portrait%2C%20high%20quality%20photography%2C%20contemporary%20style&width=500&height=600&seq=profile-001&orientation=portrait"
                alt="Ajay Kumawat"
                className="w-full h-auto object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}