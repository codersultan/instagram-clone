import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ title, iconLight, iconDark, path, photo }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        setIsActive(isActive); // Update isActive state
        return `p-2.5 my-1 hover:bg-[#f2f2f2] inline-block w-full rounded-md ${
          isActive ? "active" : ""
        }`;
      }}
    >
      <div className="nav-item flex items-center gap-3">
        <div title={title} className="nav-icon text-[1.8rem] text-black">
          {isActive ? iconDark : iconLight}
          {photo && (
            <img
              className={`w-7 h-7 rounded-full object-cover border-solid border-2 ${
                isActive ? "border-slate-800" : "border-transparent"
              }`}
              src={photo}
              alt=""
            />
          )}
        </div>
        <div className={`nav-title ${isActive ? "font-bold" : ""}`}>
          {title}
        </div>
      </div>
    </NavLink>
  );
};

export default NavItem;
