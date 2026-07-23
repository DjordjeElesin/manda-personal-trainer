import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./navLinks";
import { WhatsappButton } from "../WhatsappButton";
import { NavItem } from "./NavItem";
import { Logo } from "../Logo";

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isTransparent = pathname === "/" && !isScrolled && !isMenuOpen;

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
        isTransparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-black/80 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          to="/#top"
          onClick={onCloseMenu}
          aria-label="MANDA - početak"
          className="text-white transition-opacity hover:opacity-80"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ link, label }) => (
            <NavItem
              key={link}
              link={link}
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
            {NAV_LINKS.map(({ link: href, label }) => (
              <NavItem
                key={href}
                link={href}
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
