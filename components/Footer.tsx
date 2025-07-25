
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'ri-github-fill', link: 'https://github.com/ajaykumawat', label: 'GitHub' },
    { icon: 'ri-linkedin-fill', link: 'https://linkedin.com/in/ajaykumawat', label: 'LinkedIn' },
    { icon: 'ri-twitter-fill', link: 'https://twitter.com/ajaykumawat', label: 'Twitter' },
    { icon: 'ri-instagram-line', link: 'https://instagram.com/ajaykumawat', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Ajay Kumawat</div>
                <div className="text-sm text-gray-400">Full Stack Developer</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate developer crafting exceptional digital experiences with modern technologies 
              and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-110"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <div className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'API Development',
                'DevOps & Cloud',
                'Consulting'
              ].map((service, index) => (
                <div key={index} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-sm"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:ajay@example.com" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                    ajay@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="tel:+919876543210" className="text-white hover:text-green-400 transition-colors cursor-pointer">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line text-sm"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white">Jaipur, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get the latest updates on new projects, blog posts, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ajay Kumawat. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
