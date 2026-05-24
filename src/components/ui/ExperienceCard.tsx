import type { ExperienceEntry } from '../../types';
import { Tag } from './Tag';

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

export function ExperienceCard({ entry }: ExperienceCardProps) {
  const isExternal = entry.href.startsWith('http');
  const titleContent = (
    <>
      <span>{entry.title}</span>
      {isExternal ? (
        <svg className="card-arrow" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
          <path d="M3 13L13 3M5 3H13V11" />
        </svg>
      ) : null}
    </>
  );

  return (
    <article className="experience-card">
      <div className="experience-date">{entry.date}</div>
      <div>
        <div className="card-title-row">
          {isExternal ? (
            <a className="card-title-link" href={entry.href} target="_blank" rel="noopener noreferrer">
              {titleContent}
            </a>
          ) : (
            <span className="card-title-link">{titleContent}</span>
          )}
        </div>
        <p className="card-description">
          {entry.description}
          {entry.actionHref && entry.actionLabel ? (
            <>
              {' '}
              <a className="card-inline-link" href={entry.actionHref} target="_blank" rel="noopener noreferrer">
                {entry.actionLabel}
              </a>
            </>
          ) : null}
        </p>
        <div className="tag-row">
          {entry.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
