'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Ajay is an exceptional developer who consistently delivers high-quality code. His technical expertise and problem-solving skills make him a valuable team member.",
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechVision Solutions",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20business%20woman%2C%20project%20manager%2C%20confident%20expression%2C%20office%20environment%2C%20business%20attire%2C%20professional%20lighting%2C%20corporate%20portrait%2C%20friendly%20demeanor%2C%20contemporary%20style&width=100&height=100&seq=testimonial-001&orientation=squarish"
    },
    {
      quote: "Working with Ajay was a pleasure. He understood our requirements perfectly and delivered beyond expectations. His attention to detail is remarkable.",
      name: "Michael Chen",
      role: "CTO",
      company: "Digital Innovations Inc",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20male%20CTO%2C%20technology%20executive%2C%20confident%20smile%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20leadership%20presence%2C%20professional%20photography%2C%20contemporary%20style&width=100&height=100&seq=testimonial-002&orientation=squarish"
    },
    {
      quote: "Ajay's ability to translate complex requirements into elegant solutions is impressive. He's reliable, skilled, and a great communicator.",
      name: "Emily Rodriguez",
      role: "Lead Designer",
      company: "StartupHub Technologies",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20female%20designer%2C%20creative%20professional%2C%20friendly%20expression%2C%20modern%20workspace%2C%20casual%20professional%20attire%2C%20artistic%20background%2C%20natural%20lighting%2C%20contemporary%20portrait&width=100&height=100&seq=testimonial-003&orientation=squarish"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="w-8 h-8 flex items-center justify-center mb-4">
                <i className="ri-double-quotes-l text-3xl text-blue-200"></i>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}