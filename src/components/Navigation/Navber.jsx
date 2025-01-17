import { GoHome, GoHomeFill } from "react-icons/go";
import NavItem from "./NavItem";
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
import {
  BiBarChartSquare,
  BiMoviePlay,
  BiSolidBarChartSquare,
  BiSolidMoviePlay,
} from "react-icons/bi";

import { AiFillPlusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { PiThreadsLogo } from "react-icons/pi";
import Toggle from "../Modal/Toggle";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";

const Navber = () => {
  const { toggle, setToggle, handleToggle, toggleRef } = useToggle();

  const {
    toggle: user,
    setToggle: setUser,
    handleToggle: handleUserToggle,
  } = useToggle();

  const {
    toggle: post,
    setToggle: setPost,
    handleToggle: handlePostToggle,
  } = useToggle();

  const {
    toggle: story,
    setToggle: setStory,
    handleToggle: handleStoryToggle,
  } = useToggle();

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
              <li className="relative" ref={toggleRef}>
                <button
                  onClick={handleToggle}
                  className="create cursor-pointer p-2.5 my-1 hover:bg-[#f2f2f2] inline-block w-full rounded-md"
                >
                  <div className="nav-item flex items-center gap-3">
                    <div className="nav-icon text-[1.8rem] text-black">
                      <AiOutlinePlusSquare />
                    </div>
                    <div>Create</div>
                  </div>
                </button>
                {toggle && (
                  <Toggle>
                    <div className="sub-item border-b">
                      <button
                        onClick={handleUserToggle}
                        className="w-full px-3 py-2 hover:bg-[#f2f2f2] flex justify-between items-center"
                      >
                        <div className="sub-title">User</div>
                        <div className="sub-icon text-[1.8rem] text-black">
                          <AiOutlinePlusSquare />
                        </div>
                      </button>
                    </div>
                    <div className="sub-item border-b">
                      <button
                        onClick={handlePostToggle}
                        className="w-full px-3 py-2 hover:bg-[#f2f2f2] flex justify-between items-center"
                      >
                        <div className="sub-title">Post</div>
                        <div className="sub-icon text-[1.8rem] text-black">
                          <AiOutlinePlusSquare />
                        </div>
                      </button>
                    </div>

                    <div className="sub-item ">
                      <button
                        onClick={handleStoryToggle}
                        className="w-full px-3 py-2 hover:bg-[#f2f2f2] flex justify-between items-center"
                      >
                        <div className="sub-title">Story</div>
                        <div className="sub-icon text-[1.8rem] text-black">
                          <AiOutlinePlusSquare />
                        </div>
                      </button>
                    </div>
                  </Toggle>
                )}
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
          {user && <Modal title="Create User" inside="true" />}
          {post && <Modal title="Create Post" width="30%" />}
          {story && <Modal title="Create Story" />}
        </div>

        <div className="setting-menu">
          <nav>
            <ul>
              <li>
                <NavItem
                  title="Threads"
                  iconLight={<PiThreadsLogo />}
                  iconDark={<PiThreadsLogo />}
                  path="/threads"
                />
              </li>
              <li>
                <NavItem
                  title="More"
                  iconLight={<RxHamburgerMenu />}
                  iconDark={<FiMenu />}
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
