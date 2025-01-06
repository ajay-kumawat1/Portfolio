import { Code2, Database, Cloud, Terminal, GitBranch, TestTube, Server, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: Code2,
    description: 'Core programming languages'
  },
  {
    name: 'Backend',
    icon: Server,
    description: 'Server-side frameworks and tools'
  },
  {
    name: 'Database',
    icon: Database,
    description: 'Database management systems'
  },
  {
    name: 'Cloud',
    icon: Cloud,
    description: 'Cloud platforms and deployment'
  },
  {
    name: 'DevTools',
    icon: Terminal,
    description: 'Development tools and utilities'
  },
  {
    name: 'Testing',
    icon: TestTube,
    description: 'Testing frameworks and tools'
  },
  {
    name: 'Version Control',
    icon: GitBranch,
    description: 'Source control and collaboration'
  },
  {
    name: 'Security',
    icon: Lock,
    description: 'Authentication and authorization'
  }
];