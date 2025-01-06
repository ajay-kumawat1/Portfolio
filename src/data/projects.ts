import { Github, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProjectLink {
  url: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, secure payments, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Stripe'],
    links: [
      { url: 'https://github.com', label: 'Code', icon: Github },
      { url: 'https://demo.com', label: 'Live Demo', icon: Globe }
    ]
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking capabilities.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Firebase', 'Tailwind', 'Redux', 'WebSocket'],
    links: [
      { url: 'https://github.com', label: 'Code', icon: Github },
      { url: 'https://demo.com', label: 'Live Demo', icon: Globe }
    ]
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered platform that generates high-quality content using machine learning algorithms and natural language processing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'OpenAI', 'MongoDB', 'TailwindCSS'],
    links: [
      { url: 'https://github.com', label: 'Code', icon: Github },
      { url: 'https://demo.com', label: 'Live Demo', icon: Globe }
    ]
  }
];