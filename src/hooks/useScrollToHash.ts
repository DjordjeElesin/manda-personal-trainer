import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Height of the fixed navbar, so a section never lands underneath it.
// Mirrors the html scroll-padding-top rule in index.css.
const NAVBAR_OFFSET = 80;

// React Router does not scroll on navigation, so this restores the browser
// behaviour: jump to the hashed section when there is one, otherwise open a new
// route at the top. Section anchors in the navbar point at "/#section", which
// means they also work from other routes - the app navigates home first and
// this hook then scrolls. Smoothness comes from scroll-behavior in index.css.
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A new route should open at the top right away, not animate its way there.
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // Effects run after the route's DOM is committed, so the section already
    // exists here - no need to wait for a frame.
    const element = document.querySelector(hash);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - NAVBAR_OFFSET });
  }, [pathname, hash]);
};
