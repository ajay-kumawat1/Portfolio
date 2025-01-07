import { SkillGrid } from '@/components/skills/SkillGrid';
import { Zap, CheckCircle, Trophy, MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden mt-24">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute -bottom-1/4 -right-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_1s]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end perspective-1000">
            <div className="relative group transition-transform duration-500 transform-gpu hover:rotate-y-12 cursor-pointer preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative aspect-square w-72 h-72 rounded-2xl overflow-hidden backdrop-blur-sm">
                <img
                  src="/p-1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="space-y-8 backdrop-blur-sm bg-background/50 rounded-2xl p-6 lg:p-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hi there! I'm Ajay
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A dedicated Backend Developer with over a year of hands-on experience building high-performance, 
                scalable web applications. My mission is to transform complex ideas into seamless digital solutions 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* What I Bring Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-6 animate-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold">Backend Expertise</h3>
            </div>
            <p className="text-muted-foreground">
              Proficient in Node.js frameworks like Express.js and Nest.js, I craft robust server-side 
              architectures that ensure efficiency and scalability.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <CheckCircle className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold">Database Mastery</h3>
            </div>
            <p className="text-muted-foreground">
              Skilled in PostgreSQL, MongoDB, and MySQL, I design and optimize database systems for 
              reliability and speed.
            </p>
          </div>

          <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-pink-500/10">
                <Trophy className="w-5 h-5 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold">API Development</h3>
            </div>
            <p className="text-muted-foreground">
              Whether REST or GraphQL, I specialize in creating clean, well-documented, and efficient 
              APIs to power your front end.
            </p>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Me?
          </h3>
          <div className="grid gap-6">
            {[
              {
                title: 'Proven Communication',
                description: 'I excel in client collaboration and team integration, ensuring projects are delivered on time and exceed expectations.'
              },
              {
                title: 'Problem-Solver',
                description: "Whether it's integrating AI features, optimizing performance, or troubleshooting issues, I'm here to tackle challenges with innovative solutions."
              },
              {
                title: 'Customer-Centric Approach',
                description: 'I take the time to understand your unique requirements, delivering tailored results that drive value.'
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-4 p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Technologies I Love Working With
          </h3>
          <SkillGrid />
        </div>
      </div>
    </section>
  );
}