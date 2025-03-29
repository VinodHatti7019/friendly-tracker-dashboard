
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-7xl py-6 px-4 md:px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
