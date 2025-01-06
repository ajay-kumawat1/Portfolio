import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Instagram
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: Twitter
  }
];