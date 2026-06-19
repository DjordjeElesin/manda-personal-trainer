import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Typography } from "../ui/typography";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { EMAIL, INSTAGRAM_LINK } from "@/constants";

const Socials = () => (
  <div className="flex flex-wrap gap-4">
    <Link to={INSTAGRAM_LINK} target="_blank">
      <FaInstagram color="grey" size={22} />
    </Link>
    <Link to={`mailto:${EMAIL}`}>
      <MdOutlineEmail color="grey" size={22} />
    </Link>
  </div>
);

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-2 mt-10 bg-background">
      <Separator className="mb-1" />
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex flex-col gap-1">
          <Typography variant="caption" className="text-muted-foreground">
            Manda
          </Typography>
          <Typography variant="caption" className="text-muted-foreground">
            Tvoj lični vodič do zdravijeg života
          </Typography>
        </div>
        <Socials />
      </div>
      <Typography variant="caption" className="text-muted text-center">
        &copy; Aleksandar Mandić
      </Typography>
    </div>
  );
};
