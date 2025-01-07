import { skillCategories } from '@/data/skillCategories';
import { skills } from '@/data/skills';
import { SkillCard } from './SkillCard';

export function SkillGrid() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => {
        const categorySkills = skills.filter(skill => skill.category === category.name);
        
        if (categorySkills.length === 0) return null;
        
        return (
          <div key={category.name} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <category.icon className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categorySkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  icon={category.icon}
                  index={index} 
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}