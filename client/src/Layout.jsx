import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <div className="py-4 px-20 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
