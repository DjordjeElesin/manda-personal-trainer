import { useEffect, useRef, useState } from "react";

type TUseInViewOptions = {
  // How much of the element must be visible before it counts as "in view".
  threshold?: number;
  // Shrinks the viewport so reveals trigger slightly before the edge.
  rootMargin?: string;
  // Reveal only once (default) or every time the element re-enters the viewport.
  once?: boolean;
};

// Small IntersectionObserver wrapper used to drive scroll-reveal animations
// without pulling in an animation library.
export const useInView = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: TUseInViewOptions = {}) => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
};
