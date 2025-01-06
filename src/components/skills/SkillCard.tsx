import { cn } from '@/lib/utils';
import type { Skill } from '@/data/skills';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  icon?: LucideIcon;
}

export function SkillCard({ skill, icon: Icon }: SkillCardProps) {
  return (
    <div
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
      {Icon && <Icon className="w-6 h-6" />}
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}