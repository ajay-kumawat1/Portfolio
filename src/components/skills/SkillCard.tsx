import { cn } from '@/lib/utils';
import type { Skill } from '@/data/skills';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  icon?: LucideIcon;
  index: number;
}

export function SkillCard({ skill, icon: Icon, index }: SkillCardProps) {
  return (
    <div
      className={cn(
        "group relative p-4 rounded-xl overflow-hidden",
        "bg-background/50 backdrop-blur-sm border border-border/50",
        "hover:bg-gradient-to-br from-blue-500/10 to-purple-500/10",
        "transition-all duration-300 ease-out",
        "animate-fade-up",
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative flex items-center gap-3">
        {Icon && (
          <div className="p-2 rounded-lg bg-background/50 group-hover:bg-background/80 transition-colors">
            <Icon className="w-5 h-5 text-blue-500 group-hover:text-purple-500 transition-colors" />
          </div>
        )}
        <div>
          <h3 className="font-medium text-foreground group-hover:text-blue-500 transition-colors">
            {skill.name}
          </h3>
          {skill.level && (
            <div className="mt-1 flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i < getLevelIndex(skill.level || '')
                      ? "w-4 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-3 bg-muted"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getLevelIndex(level: string): number {
  switch (level) {
    case 'beginner': return 1;
    case 'intermediate': return 2;
    case 'advanced': return 3;
    case 'expert': return 4;
    default: return 0;
  }
}