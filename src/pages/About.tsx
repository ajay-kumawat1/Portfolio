import { SkillGrid } from '@/components/skills/SkillGrid';

export function About() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-1/4 -right-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative aspect-square w-72 h-72 rounded-2xl overflow-hidden backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                  alt="Profile"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 backdrop-blur-sm bg-background/50 rounded-2xl p-6 lg:p-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Full-stack developer with 5+ years of experience specializing in Node.js and modern web technologies. 
                  Passionate about building scalable, efficient backend systems and APIs that power exceptional user experiences.
                </p>
                <p>
                  Experienced in cloud architecture and microservices, with a strong focus on code quality, testing, 
                  and continuous integration/deployment practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-6 lg:p-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Technical Skills
          </h2>
          <SkillGrid />
        </div>
      </div>
    </section>
  );
}