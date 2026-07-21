import { cn } from "@/lib/utils";

type TLogoProps = {
  className?: string;
};

// Typographic MANDA wordmark. Echoes the graffiti mark baked into his photos
// (heavy, italic, with the underscore accent) but stays crisp and scalable.
// Easy to swap for a real SVG logo later.
export const Logo = ({ className }: TLogoProps) => {
  return (
    <span
      className={cn(
        "font-barlow inline-flex flex-col leading-none tracking-tight select-none",
        className,
      )}
    >
      <span className="text-2xl font-black uppercase italic">MANDA</span>
      <span className="mt-0.5 h-0.5 w-6 self-start bg-current" />
    </span>
  );
};
