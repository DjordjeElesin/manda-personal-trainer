import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type TStarRatingProps = {
  // Number of filled stars out of `total`.
  rating: number;
  total?: number;
  className?: string;
};

export const StarRating = ({
  rating,
  total = 5,
  className,
}: TStarRatingProps) => {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Ocena ${rating} od ${total}`}
    >
      {Array.from({ length: total }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "size-4",
            index < rating
              ? "fill-white text-white"
              : "fill-transparent text-white/30",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
};
