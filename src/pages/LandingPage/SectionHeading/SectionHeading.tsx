import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type TSectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

// Shared heading block (eyebrow label + big Barlow title + subtitle) so every
// section shares the same rhythm and reveals on scroll.
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: TSectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        isCentered && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase",
        )}
      >
        <span className="h-px w-8 bg-white/30" />
        {eyebrow}
      </span>
      <h2 className="font-barlow text-4xl leading-[0.95] font-extrabold tracking-tight text-white uppercase md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-sm text-white/60 md:text-base",
            isCentered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};
