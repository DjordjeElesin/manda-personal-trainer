import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { LandingPage } from "@/pages/LandingPage";

// Code-split the calculator (and its recharts dependency) so the landing page
// ships a lean bundle and only loads it when the route is visited.
const CalorieCalculator = lazy(() =>
  import("@/pages/CalorieCalculator").then((module) => ({
    default: module.CalorieCalculator,
  })),
);

const RouteFallback = () => (
  <div className="text-muted-foreground flex min-h-svh items-center justify-center text-sm">
    Učitavanje…
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "kalkulator",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <CalorieCalculator />
          </Suspense>
        ),
      },
    ],
  },
]);
