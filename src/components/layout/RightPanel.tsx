import { Footer } from './Footer';
import { Achievements } from '../sections/Achievements';
import { About } from '../sections/About';
import { Career } from '../sections/Career';
import { Projects } from '../sections/Projects';

export function RightPanel() {
  return (
    <main className="right-panel">
      <About />
      <Career />
      <Achievements />
      <Projects />
      <Footer />
    </main>
  );
}
