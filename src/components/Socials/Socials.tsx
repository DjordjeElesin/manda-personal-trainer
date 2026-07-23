import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { EMAIL, INSTAGRAM_LINK, YOUTUBE_CHANNEL } from "@/constants";
import { cn } from "@/lib/utils";

type TSocialsProps = {
  includeLabels?: boolean;
  className?: string;
};

const data = [
  {
    link: INSTAGRAM_LINK,
    label: "@2manda3",
    target: "_blank",
    ariaLabel: "Instagram",
    icon: <FaInstagram color="grey" size={22} />,
  },
  {
    link: `mailto:${EMAIL}`,
    label: EMAIL,
    target: "",
    ariaLabel: "Email",
    icon: <MdOutlineEmail color="grey" size={22} />,
  },
  {
    link: YOUTUBE_CHANNEL,
    label: "MANDA",
    target: "_blank",
    ariaLabel: "Youtube",
    icon: <FaYoutube color="grey" size={22} />,
  },
];

export const Socials = ({
  includeLabels = false,
  className,
}: TSocialsProps) => {
  return (
    <div className={cn("flex flex-wrap gap-4 text-white/60", className)}>
      {data.map((social) => (
        <a
          key={social.ariaLabel}
          href={social.link}
          target={social.target}
          aria-label={social.ariaLabel}
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          {social.icon}
          {includeLabels && <span className="text-sm">{social.label}</span>}
        </a>
      ))}
    </div>
  );
};
