import { useCallback, useEffect, useRef, useState } from "react";

type TCarouselState = {
  // Whether there is content to scroll to in each direction (for arrow enabling).
  canPrev: boolean;
  canNext: boolean;
  // How far the track is scrolled, 0..1 (drives the progress indicator).
  progress: number;
  // Fraction of the track currently visible, i.e. width of the progress thumb.
  visibleFraction: number;
};

const INITIAL_STATE: TCarouselState = {
  canPrev: false,
  canNext: true,
  progress: 0,
  visibleFraction: 1,
};

// Drives a native scroll-snap carousel: reports scroll position for the
// progress bar / arrow states and exposes smooth prev/next steps. One "step" is
// the width of a single slide (plus the track gap), so it advances by whatever
// number of slides is currently visible at the active breakpoint.
export const useCarousel = <T extends HTMLElement = HTMLDivElement>() => {
  const trackRef = useRef<T>(null);
  const [state, setState] = useState<TCarouselState>(INITIAL_STATE);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const slide = track.firstElementChild as HTMLElement | null;
    if (!slide) return track.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    return slide.offsetWidth + gap;
  };

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    setState({
      canPrev: scrollLeft > 4,
      canNext: scrollLeft < maxScroll - 4,
      progress: maxScroll > 0 ? scrollLeft / maxScroll : 0,
      visibleFraction: scrollWidth > 0 ? clientWidth / scrollWidth : 1,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByStep = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * getStep(), behavior: "smooth" });
  };

  const scrollPrev = () => scrollByStep(-1);
  const scrollNext = () => scrollByStep(1);

  return { trackRef, ...state, scrollPrev, scrollNext };
};
