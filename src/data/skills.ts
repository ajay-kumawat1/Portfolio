export interface Skill {
  name: string;
  category: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 'expert' },
  { name: 'TypeScript', category: 'Languages', level: 'expert' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 'expert' },
  { name: 'Express.js', category: 'Backend', level: 'expert' },
  { name: 'NestJS', category: 'Backend', level: 'advanced' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', level: 'expert' },
  { name: 'MongoDB', category: 'Database', level: 'advanced' },
  { name: 'Redis', category: 'Database', level: 'intermediate' },
  { name: 'Firebase', category: 'Database', level: 'advanced' },
  
  // Cloud & Deployment
  { name: 'AWS', category: 'Cloud', level: 'advanced' },
  { name: 'Docker', category: 'Cloud', level: 'advanced' },
  { name: 'Kubernetes', category: 'Cloud', level: 'intermediate' },
  
  // Development Tools
  { name: 'npm/yarn', category: 'DevTools', level: 'expert' },
  { name: 'Webpack', category: 'DevTools', level: 'advanced' },
  { name: 'VS Code', category: 'DevTools', level: 'expert' },
  
  // Testing
  { name: 'Jest', category: 'Testing', level: 'expert' },
  { name: 'Mocha', category: 'Testing', level: 'advanced' },
  { name: 'Supertest', category: 'Testing', level: 'advanced' },
  
  // Version Control
  { name: 'Git', category: 'Version Control', level: 'expert' },
  { name: 'GitHub', category: 'Version Control', level: 'expert' },
  
  // Security
  { name: 'JWT', category: 'Security', level: 'expert' },
  { name: 'OAuth 2.0', category: 'Security', level: 'advanced' },
  { name: 'Passport.js', category: 'Security', level: 'advanced' }
];