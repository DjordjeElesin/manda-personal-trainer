import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Typography } from "@/components/ui/typography";
import { Flame, Info } from "lucide-react";

const renderPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="ghost" className="px-1">
        <Info size={20} />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverHeader>
        <PopoverTitle>BMR</PopoverTitle>
        <PopoverDescription>
          BMR je broj kalorija koji tvoje telo potroši dok bukvalno ne radiš
          ništa, to su kalorije koje tvoje telo sagori samo dok dišeš i održava
          osnovne funkcije
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
);

export const BmrInfo = ({ bmr }: { bmr: number }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 items-center text-muted-foreground">
        <Flame />
        <Typography>BMR</Typography>
        {renderPopover()}
      </div>
      <Typography variant="h2" className="text-lg">
        {bmr} kcal/dan
      </Typography>
    </div>
  );
};
