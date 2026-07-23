import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollToHash } from "./hooks";

const App = () => {
  useScrollToHash();

  return (
    <div className="flex flex-col min-h-svh relative">
      <div className="flex-1 min-w-72">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
