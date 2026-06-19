import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export const ErrorBoundary = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="max-w-100">
        <CardContent className="flex flex-col items-start gap-1 p-8">
          <Typography variant="h2" className="flex items-center gap-2.5">
            <Frown />
            <Typography as="span">Oops!</Typography>
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            Nešto nije u redu, hajde da te vratimo na početnu stranicu.
          </Typography>
          <Button className="mt-4" asChild>
            <Link to="/">Idi na početak</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
