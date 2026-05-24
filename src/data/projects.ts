import type { ProjectEntry } from '../types';

export const projects: ProjectEntry[] = [
  {
    thumbnailLabel: 'FULL-STACK',
    previewImage: '/project-previews/chic-charms.png',
    previewAlt: 'Chic Charms storefront homepage preview',
    title: 'Production E-Commerce Platform',
    href: 'https://chic-charms-stores.vercel.app/',
    description:
      'Complete e-commerce application featuring authentication, product workflows, cart systems, order handling, admin operations, and responsive frontend architecture designed around real-world application structure.',
    tags: ['React', 'Node.js', 'MongoDB', 'Authentication', 'Full-Stack'],
  },
  {
    thumbnailLabel: 'IN PROGRESS',
    previewImage: '/project-previews/civiceye.png',
    previewAlt: 'CivicEye landing page preview',
    title: 'CivicEye — Open for Inspection',
    href: 'https://civiceye-ai-liard.vercel.app/',
    description:
      'Architecture, workflow decisions, and system structure available for review. Deliberately shown before completion as an active engineering project in development.',
    tags: ['Computer Vision', 'System Design', 'Workflow Systems', 'In Progress'],
  },
];
