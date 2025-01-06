import { skillCategories } from '@/data/skillCategories';
import { skills } from '@/data/skills';
import { SkillCard } from './SkillCard';

export function SkillGrid() {
  return (
    <div className="space-y-8">
      {skillCategories.map((category) => {
        const categorySkills = skills.filter(skill => skill.category === category.name);
        
        if (categorySkills.length === 0) return null;
        
        return (
          <div key={category.name} className="space-y-4">
            <div className="flex items-center gap-2">
              <category.icon className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {categorySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}