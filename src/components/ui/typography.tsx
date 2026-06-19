import { cn } from "@/lib/utils";
import * as React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "blockquote"
  | "caption";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant;
  as?: React.ElementType;
};

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold font-barlow tracking-tight lg:text-5xl text-balance text-center",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold font-barlow tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold font-barlow tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold font-barlow tracking-tight",
  body: "leading-4",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  caption: "text-xs font-medium leading-none",
};

const variantTags: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  blockquote: "blockquote",
  caption: "span",
};

export const Typography = ({
  children,
  variant = "body",
  as,
  className,
  ...props
}: TypographyProps) => {
  const Component = as || variantTags[variant];

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
