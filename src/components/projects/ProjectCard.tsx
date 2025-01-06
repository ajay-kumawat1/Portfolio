import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 p-6">
          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 mb-4">
            {project.description}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.links.map(({ url, label, icon: Icon }) => (
              <Button
                key={label}
                variant={label === 'Live Demo' ? 'default' : 'outline'}
                size="sm"
                className={cn(
                  "flex-1",
                  label === 'Live Demo' && "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                )}
                onClick={() => window.open(url, '_blank')}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}