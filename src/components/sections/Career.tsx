import { career } from '../../data/career';
import { ExperienceCard } from '../ui/ExperienceCard';

function SectionLabel({ text }: { text: string }) {
  return <p className="section-label">{text}</p>;
}

export function Career() {
  return (
    <section id="career" className="content-section">
      <SectionLabel text="Career" />
      <div className="section-list">
        {career.map((entry) => (
          <ExperienceCard key={`${entry.date}-${entry.title}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}
