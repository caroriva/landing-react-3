import Nabvar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nabvar />

      <Outlet />
    </>
  );
}

export default Layout;
