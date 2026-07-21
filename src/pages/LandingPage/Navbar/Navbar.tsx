import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../Logo";
import { WhatsappButton } from "../WhatsappButton";
import { NAV_LINKS } from "../landingContent";

type TNavItemProps = {
  href: string;
  label: string;
  onNavigate: () => void;
  className?: string;
};

// Anchors (#...) scroll within the page; routes (/...) navigate. Everything
// else stays a plain link so the calculator route keeps working.
const NavItem = ({ href, label, onNavigate, className }: TNavItemProps) => {
  const baseClass = cn(
    "text-sm font-medium text-white/70 transition-colors hover:text-white",
    className,
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onNavigate} className={baseClass}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onNavigate} className={baseClass}>
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const onCloseMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#top"
          onClick={onCloseMenu}
          aria-label="MANDA - početak"
          className="text-white transition-opacity hover:opacity-80"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              onNavigate={onCloseMenu}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsappButton
            id="nav-whatsapp-cta"
            label="Zakaži konsultacije"
            size="sm"
          />
        </div>

        <Button
          id="nav-menu-toggle"
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={isMenuOpen}
          className="text-white lg:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 border-t border-white/10 duration-200 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <NavItem
                key={href}
                href={href}
                label={label}
                onNavigate={onCloseMenu}
                className="py-2 text-base"
              />
            ))}
            <WhatsappButton
              id="mobile-whatsapp-cta"
              label="Zakaži konsultacije"
              className="mt-3 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};
