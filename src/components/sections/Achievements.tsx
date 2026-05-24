import { achievements } from '../../data/achievements';
import { ExperienceCard } from '../ui/ExperienceCard';

function SectionLabel({ text }: { text: string }) {
  return <p className="section-label">{text}</p>;
}

export function Achievements() {
  return (
    <section id="achievements" className="content-section">
      <SectionLabel text="Achievements" />
      <div className="section-list">
        {achievements.map((entry) => (
          <ExperienceCard key={`${entry.date}-${entry.title}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}
