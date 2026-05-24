import type { ProjectEntry } from '../../types';
import { Tag } from './Tag';

type ProjectCardProps = {
  entry: ProjectEntry;
};

export function ProjectCard({ entry }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a
        className="project-thumbnail"
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${entry.title}`}
      >
        <img src={entry.previewImage} alt={entry.previewAlt} loading="lazy" />
      </a>
      <div>
        <div className="card-title-row">
          <a className="card-title-link" href={entry.href} target="_blank" rel="noopener noreferrer">
            <span>{entry.title}</span>
            <svg className="card-arrow" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
              <path d="M3 13L13 3M5 3H13V11" />
            </svg>
          </a>
        </div>
        <p className="card-description">{entry.description}</p>
        <div className="tag-row">
          {entry.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
