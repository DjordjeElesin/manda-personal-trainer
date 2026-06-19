import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/ui/typography";
import type { TActivityLevelKeys } from "@/types";
import { activityLevels } from "./activityLevelsList";
import { cn } from "@/lib/utils";

type TActivityLevelProps = {
  selectedLevel: TActivityLevelKeys;
  onChange: (value: TActivityLevelKeys) => void;
};

export const ActivityLevels = ({
  selectedLevel,
  onChange,
}: TActivityLevelProps) => {
  const currentLevel = activityLevels.find(({ id }) => id === selectedLevel);
  return (
    <div className="flex flex-col gap-2 mt-2 w-full">
      <Label>Nivo aktivnosti</Label>

      <div className="grid grid-cols-2 gap-1.5">
        {activityLevels.map(({ id, label }, index) => {
          const isSelected = id === selectedLevel;
          const isLastOdd =
            index === activityLevels.length - 1 &&
            activityLevels.length % 2 !== 0;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={cn(
                "py-2 px-3 rounded-md border text-sm transition-all text-center",
                isLastOdd && "col-span-2",
                isSelected
                  ? "bg-secondary font-medium text-foreground"
                  : "border-border bg-background text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
      {currentLevel && (
        <Card className="gap-3 w-full mt-2">
          <CardHeader className="flex items-center">
            <Typography variant="h3">{currentLevel.label}</Typography>
            <Typography variant="h4">x{currentLevel.multiplier}</Typography>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Typography variant="body" className="text-stone-400">
              {currentLevel.summary}
            </Typography>
            <Typography variant="body" className="text-stone-500">
              {currentLevel.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
