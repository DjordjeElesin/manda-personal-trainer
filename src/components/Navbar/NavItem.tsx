import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type TNavItemProps = {
  link: string;
  label: string;
  onNavigate: () => void;
  className?: string;
};

export const NavItem = ({
  link,
  label,
  onNavigate,
  className,
}: TNavItemProps) => {
  const { pathname, hash } = useLocation();

  const isActive = `${pathname}${hash}` === link;

  const baseClass = cn(
    "w-fit text-sm font-medium transition-colors",
    isActive ? "text-white" : "text-white/70 hover:text-white",
    className,
  );

  return (
    <Link
      to={link}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={baseClass}
    >
      <span
        className={cn(
          "relative inline-block",
          isActive &&
            "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white",
        )}
      >
        {label}
      </span>
    </Link>
  );
};
