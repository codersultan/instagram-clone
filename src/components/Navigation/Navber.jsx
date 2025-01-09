import { GoHome, GoHomeFill } from "react-icons/go";
import NavItem from "../NavItem/NavItem";
import {
  IoCompass,
  IoCompassOutline,
  IoHeartOutline,
  IoHeartSharp,
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoSearch,
  IoSearchOutline,
} from "react-icons/io5";
import { FaCompass, FaRegCompass } from "react-icons/fa";
import {
  BiBarChartSquare,
  BiMoviePlay,
  BiSolidBarChartSquare,
  BiSolidMoviePlay,
} from "react-icons/bi";
import {
  PiPaperPlaneTilt,
  PiPaperPlaneTiltFill,
  PiPaperPlaneTiltLight,
} from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegSquarePlus, FaSquarePlus } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { AiFillPlusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiBarChartBoxFill, RiBarChartBoxLine } from "react-icons/ri";

const Navber = () => {
  return (
    <>
      <div className="nav-bar grid grid-rows-[1fr,10fr,1fr] p-3 w-full h-screen border-r border-slate-300">
        <div className="logo py-4 px-3">
          <img className="w-[103px]" src="/public/Instagram-Logo.png" alt="" />
        </div>

        <div className="main-menu">
          <nav>
            <ul>
              <li>
                <NavItem
                  title="Home"
                  iconLight={<GoHome />}
                  iconDark={<GoHomeFill />}
                  path="/"
                />
              </li>
              <li>
                <NavItem
                  title="Search"
                  iconLight={<IoSearchOutline />}
                  iconDark={<IoSearch />}
                  path="/search"
                />
              </li>
              <li>
                <NavItem
                  title="Explore"
                  iconLight={<IoCompassOutline />}
                  iconDark={<IoCompass />}
                  path="/explore"
                />
              </li>
              <li>
                <NavItem
                  title="Reels"
                  iconLight={<BiMoviePlay />}
                  iconDark={<BiSolidMoviePlay />}
                  path="/reels"
                />
              </li>
              <li>
                <NavItem
                  title="Messages"
                  iconLight={<IoPaperPlaneOutline />}
                  iconDark={<IoPaperPlane />}
                  path="/messages"
                />
              </li>
              <li>
                <NavItem
                  title="Notifications"
                  iconLight={<IoHeartOutline />}
                  iconDark={<IoHeartSharp />}
                  path="/notifications"
                />
              </li>
              <li>
                <NavItem
                  title="Create"
                  iconLight={<AiOutlinePlusSquare />}
                  iconDark={<AiFillPlusSquare />}
                  path="/create"
                />
              </li>
              <li>
                <NavItem
                  title="Dashboard"
                  iconLight={<BiBarChartSquare />}
                  iconDark={<BiSolidBarChartSquare />}
                  path="/dashboard"
                />
              </li>
              <li>
                <NavItem
                  title="Profile"
                  path="/profile"
                  photo="https://i.ibb.co.com/6WKNTTF/Kalimi.jpg"
                />
              </li>
            </ul>
          </nav>
        </div>

        <div className="setting-menu">
          <nav>
            <ul>
              <li>
                <NavItem
                  title="Home"
                  iconLight={<GoHome />}
                  iconDark={<GoHomeFill />}
                  path="/"
                />
              </li>
              <li>
                <NavItem
                  title="Search"
                  iconLight={<IoSearchOutline />}
                  iconDark={<IoSearch />}
                  path="/search"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navber;
