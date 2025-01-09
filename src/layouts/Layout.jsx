import { Outlet } from "react-router-dom";
import Navber from "../components/Navigation/Navber";

const Layout = () => {
  return (
    <>
      <div className="layout flex">
        <aside className="w-[339px] fixed">
          <Navber />
        </aside>
        <div className="page w-full ml-[339px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
