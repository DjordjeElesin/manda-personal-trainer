import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { ErrorBoundary } from "@/pages/ErrorBoundary";
import { CalorieCalculator } from "@/pages/CalorieCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [{ index: true, element: <CalorieCalculator /> }],
  },
]);
