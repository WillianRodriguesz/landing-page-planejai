import { useEffect, useRef, useState } from "react";

type ScrollRevealOptions = {
  threshold?: number;
  repeat?: boolean;
};

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, repeat = false } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        } else if (repeat) {
          setRevealed(false);
        }
      },
      { threshold },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return { ref, revealed };
}
