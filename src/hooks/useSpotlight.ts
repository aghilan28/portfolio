import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export function useSpotlight(spotlightRef: RefObject<HTMLDivElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) {
      return undefined;
    }

    const updateSpotlight = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      spotlight.style.background = `radial-gradient(600px at ${positionRef.current.x}px ${positionRef.current.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    window.addEventListener('mousemove', updateSpotlight, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateSpotlight);
    };
  }, [spotlightRef]);
}
