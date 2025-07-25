
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'ri-home-line' },
    { id: 'about', label: 'About', icon: 'ri-user-line' },
    { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
    { id: 'experience', label: 'Experience', icon: 'ri-briefcase-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-message-line' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ajay
              </div>
              <div className="text-sm text-gray-400 -mt-1">
                Developer
              </div>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className={item.icon}></i>
                </div>
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`text-xl text-white transition-transform duration-300 ${
              isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40">
          <div className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center px-6 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer group ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                    }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center mr-4">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <span className="text-lg">{item.label}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="ri-arrow-right-line text-lg"></i>
                    </div>
                  </button>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg shadow-blue-500/20 whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center">
                      <i className="ri-message-3-line mr-2"></i>
                      Get In Touch
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
