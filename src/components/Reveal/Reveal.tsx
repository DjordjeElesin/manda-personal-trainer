import type { ElementType, ReactNode } from "react";

import { useInView } from "@/hooks";
import { cn } from "@/lib/utils";

type TRevealDirection = "up" | "down" | "left" | "right" | "none";

type TRevealProps = {
  children: ReactNode;
  className?: string;
  // Direction the content travels in from while fading in.
  direction?: TRevealDirection;
  // Stagger helper: delay in ms before this element animates in.
  delay?: number;
  // Render as a different element (e.g. "li", "section") when needed.
  as?: ElementType;
};

// Hidden-state translate utilities, written out in full so Tailwind's JIT
// keeps them in the build.
const hiddenClassByDirection: Record<TRevealDirection, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

// Wraps content in a fade + slide transition that fires the first time it
// scrolls into view. Purely CSS-driven; motion is disabled automatically for
// users who prefer reduced motion.
export const Reveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  as: Component = "div",
}: TRevealProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:translate-x-0! motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0",
        isInView
          ? "translate-x-0 translate-y-0 opacity-100 blur-0"
          : cn("opacity-0 blur-[2px]", hiddenClassByDirection[direction]),
        className,
      )}
    >
      {children}
    </Component>
  );
};
