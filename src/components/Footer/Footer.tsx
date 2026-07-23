import { Logo } from "@/components/Logo";
import { Socials } from "../Socials";

type TFooterHeadingProps = {
  children: React.ReactNode;
};

export const DEVELOPER_NAME = "Elison Dev";
export const DEVELOPER_EMAIL = "elesindjordje10@gmail.com";
export const DEVELOPER_LINK = `mailto:${DEVELOPER_EMAIL}`;

const FooterHeading = ({ children }: TFooterHeadingProps) => (
  <h3 className="font-barlow text-xs font-bold tracking-[0.25em] text-white/40 uppercase">
    {children}
  </h3>
);

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-14 pb-6 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-4">
            <Logo className="text-white" />
            <p className="text-sm text-white/60">
              Tvoj lični vodič do zdravijeg života. Personalizovani treninzi,
              plan ishrane i podrška na svakom koraku.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <FooterHeading>Kontakt</FooterHeading>
            <Socials includeLabels className="flex-col gap-3" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-2 border-t border-white/10 pt-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Aleksandar Mandić. Sva prava
            zadržana.
          </p>
          <p className="text-xs text-white/40">
            Izrada sajta:{" "}
            <a
              href={DEVELOPER_LINK}
              className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {DEVELOPER_NAME}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
