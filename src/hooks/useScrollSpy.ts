import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!elements.length) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const viewportHeight = window.innerHeight;
      const focusY = viewportHeight / 2;
      const centralBandTop = viewportHeight * 0.35;
      const centralBandBottom = viewportHeight * 0.65;

      const rankedSections = elements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const centralOverlap = Math.max(
            0,
            Math.min(rect.bottom, centralBandBottom) - Math.max(rect.top, centralBandTop),
          );
          const containsFocus = rect.top <= focusY && rect.bottom >= focusY;
          const sectionCenter = rect.top + rect.height / 2;
          const centerDistance = Math.abs(sectionCenter - focusY);

          return {
            id: element.id,
            score: (containsFocus ? 100000 : 0) + centralOverlap * 100 + visibleHeight - centerDistance * 0.01,
          };
        })
        .sort((a, b) => b.score - a.score);

      const nextSection = rankedSections[0]?.id;

      if (nextSection) {
        setActiveSection(nextSection);
      }
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}
