import { Socials } from "../Socials";
import { Separator } from "../ui/separator";
import { Typography } from "../ui/typography";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-2 mt-10 bg-background">
      <Separator className="mb-1" />
      <div className="flex items-center justify-between flex-wrap px-5">
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
