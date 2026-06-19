import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-svh relative">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
