
'use client';

import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.message.length > 500) {
      setSubmitMessage('Message cannot exceed 500 characters');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: "ri-mail-line",
      title: "Email",
      value: "ajay@example.com",
      link: "mailto:ajay@example.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "ri-phone-line",
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "ri-map-pin-line",
      title: "Location",
      value: "Jaipur, India",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: "ri-github-fill",
      title: "GitHub",
      link: "https://github.com/ajaykumawat",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: "ri-linkedin-fill",
      title: "LinkedIn",
      link: "https://linkedin.com/in/ajaykumawat",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: "ri-twitter-fill",
      title: "Twitter",
      link: "https://twitter.com/ajaykumawat",
      gradient: "from-sky-400 to-sky-600"
    },
    {
      icon: "ri-instagram-line",
      title: "Instagram",
      link: "https://instagram.com/ajaykumawat",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-semibold mb-4 block">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send a Message
              </h3>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm resize-none transition-all duration-300"
                    placeholder="Tell me about your project, goals, and how I can help you..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-400 mt-2" suppressHydrationWarning={true}>
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center justify-center transform hover:scale-105 shadow-lg"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className={isSubmitting ? "ri-loader-4-line animate-spin" : "ri-send-plane-2-line"}></i>
                  </div>
                  <span suppressHydrationWarning={true}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>

                {submitMessage && (
                  <div className={`text-center p-4 rounded-xl ${submitMessage.includes('Thank you') ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`} suppressHydrationWarning={true}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="group flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <i className={`${method.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <i className={`${social.icon} text-lg text-white`}></i>
                      </div>
                      <span className="text-white group-hover:text-blue-300 transition-colors font-medium">
                        {social.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Location
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">50+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
