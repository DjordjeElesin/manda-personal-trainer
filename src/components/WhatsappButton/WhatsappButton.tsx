import type { ComponentProps } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getWhatsappLink } from "@/constants";

type TWhatsappButtonProps = {
  id: string;
  label?: string;
  message?: string;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

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
      <a
        href={getWhatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="size-4" aria-hidden />
        {label}
      </a>
    </Button>
  );
};
