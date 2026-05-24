export interface NavItem {
  label: string;
  sectionId: string;
}

export interface ExperienceEntry {
  date: string;
  title: string;
  href: string;
  description: string;
  tags: string[];
  actionLabel?: string;
  actionHref?: string;
}

export interface ProjectEntry {
  thumbnailLabel: string;
  previewImage: string;
  previewAlt: string;
  title: string;
  href: string;
  description: string;
  tags: string[];
}
