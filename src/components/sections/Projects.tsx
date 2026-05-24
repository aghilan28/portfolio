import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

function SectionLabel({ text }: { text: string }) {
  return <p className="section-label">{text}</p>;
}

export function Projects() {
  return (
    <section id="projects" className="content-section">
      <SectionLabel text="Projects" />
      <div className="section-list">
        {projects.map((entry) => (
          <ProjectCard key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}
