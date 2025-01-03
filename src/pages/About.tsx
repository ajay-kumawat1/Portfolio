import { cn } from '@/lib/utils';
import { skills } from '@/data/skills';

export function About() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-1/4 -right-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative aspect-square w-96 h-96 rounded-2xl overflow-hidden backdrop-blur-sm">
                <img
                  src="/p-1.jpg"
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
                Passionate Node.js backend developer with expertise in building robust, scalable, and efficient server-side applications. Skilled in RESTful APIs, database integration, and optimizing system performance. Proficient in JavaScript, Express.js, and cloud deployment. Committed to delivering high-quality, secure code and collaborating with teams to create impactful digital solutions. Constant learner and problem-solver.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Design Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className={cn(
                      "px-4 py-3 rounded-xl",
                      "bg-gradient-to-r from-blue-500/10 to-purple-500/10",
                      "hover:from-blue-500 hover:to-purple-500",
                      "hover:text-white",
                      "transition-all duration-300 ease-in-out",
                      "transform hover:scale-105 hover:-translate-y-1",
                      "cursor-default",
                      "flex flex-col items-center gap-2 text-center"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}