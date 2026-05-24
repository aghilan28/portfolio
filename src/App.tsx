import { useRef } from 'react';
import { LeftPanel } from './components/layout/LeftPanel';
import { RightPanel } from './components/layout/RightPanel';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useSpotlight } from './hooks/useSpotlight';

const sectionIds = ['about', 'career', 'achievements', 'projects'];

export default function App() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const activeSection = useScrollSpy(sectionIds);

  useSpotlight(spotlightRef);

  return (
    <>
      <div ref={spotlightRef} className="spotlight" aria-hidden="true" />
      <div className="app-shell">
        <LeftPanel activeSection={activeSection} />
        <RightPanel />
      </div>
    </>
  );
}
