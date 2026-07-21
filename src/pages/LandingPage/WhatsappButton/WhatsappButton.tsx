import type { ComponentProps } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsappLink } from "@/constants";

type TWhatsappButtonProps = {
  // Unique per instance (repo convention: every button has a unique id).
  id: string;
  label?: string;
  // Optional custom prefilled WhatsApp message (e.g. per pricing plan).
  message?: string;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

// Primary conversion action across the page - opens a prefilled WhatsApp chat.
export const WhatsappButton = ({
  id,
  label = "Zakaži besplatne konsultacije",
  message,
  className,
  variant = "default",
  size = "lg",
}: TWhatsappButtonProps) => {
  return (
    <Button
      id={id}
      asChild
      variant={variant}
      size={size}
      className={cn("gap-2 font-semibold", className)}
    >
      <a href={getWhatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="size-4" aria-hidden />
        {label}
      </a>
    </Button>
  );
};
