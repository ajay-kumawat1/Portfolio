import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-1/4 -right-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            cloud architecture, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}