'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: "ri-mail-line",
      title: "Email",
      value: "ajay@example.com",
      link: "mailto:ajay@example.com"
    },
    {
      icon: "ri-phone-line",
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: "ri-map-pin-line",
      title: "Location",
      value: "Jaipur, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: "ri-github-fill",
      title: "GitHub",
      link: "https://github.com/ajaykumawat"
    },
    {
      icon: "ri-linkedin-fill",
      title: "LinkedIn",
      link: "https://linkedin.com/in/ajaykumawat"
    },
    {
      icon: "ri-twitter-fill",
      title: "Twitter",
      link: "https://twitter.com/ajaykumawat"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                    <i className={`${method.icon} text-xl text-blue-600`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Follow Me
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <i className={`${social.icon} text-xl text-gray-600 hover:text-blue-600`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Location
            </h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}