import type { NavItem as NavItemType } from '../../types';
import { NavItem } from '../ui/NavItem';

type LeftPanelProps = {
  activeSection: string;
};

const navItems: NavItemType[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Career', sectionId: 'career' },
  { label: 'Achievements', sectionId: 'achievements' },
  { label: 'Projects', sectionId: 'projects' },
];

const socialLinks = [
  {
    href: 'https://github.com/aghilan28',
    label: 'GitHub profile',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.15-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.19 1.75 1.19 1.02 1.76 2.68 1.25 3.34.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a10.94 10.94 0 0 1 5.81 0c2.22-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.68 5.39-5.24 5.68.41.35.78 1.05.78 2.11 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56a11.52 11.52 0 0 0 7.85-10.94C23.5 5.66 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/aghilan-murugan-21b6ab369',
    label: 'LinkedIn profile',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=murugan.aghilan28@gmail.com',
    label: 'Email Aghilan',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.25h18A2.25 2.25 0 0 1 23.25 7.5v9A2.25 2.25 0 0 1 21 18.75H3A2.25 2.25 0 0 1 .75 16.5v-9A2.25 2.25 0 0 1 3 5.25Zm0 1.5a.75.75 0 0 0-.75.75v.29l9.32 5.98a.75.75 0 0 0 .86 0l9.32-5.98V7.5a.75.75 0 0 0-.75-.75H3Zm18 10.5a.75.75 0 0 0 .75-.75V9.57l-8.51 5.46a2.25 2.25 0 0 1-2.48 0L2.25 9.57v6.93A.75.75 0 0 0 3 17.25h18Z" />
      </svg>
    ),
  },
];

export function LeftPanel({ activeSection }: LeftPanelProps) {
  return (
    <aside className="left-panel">
      <div>
        <div className="identity-block">
          <h1 className="identity-name">AGHILAN M</h1>
          <h2 className="identity-title">
            CSE Student
            <br />
            Full-Stack &amp; AI Systems Builder
          </h2>
          <p className="identity-bio">
            I build full-stack applications and AI-assisted systems focused on real operational workflows.
          </p>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavItem key={item.sectionId} item={item} active={activeSection === item.sectionId} />
          ))}
        </nav>
      </div>

      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
