import { GoFileMedia, GoHome, GoHomeFill } from "react-icons/go";
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
import { FiMenu, FiUsers } from "react-icons/fi";
import { PiThreadsLogo } from "react-icons/pi";
import Toggle from "../Modal/Toggle";
import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import { LuImagePlay } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";

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
                        <div className="sub-icon text-[1.6rem] text-black">
                          <LuImagePlay />
                        </div>
                      </button>
                    </div>
                    <div className="sub-item border-b">
                      <button
                        onClick={handlePostToggle}
                        className="w-full px-3 py-2 hover:bg-[#f2f2f2] flex justify-between items-center"
                      >
                        <div className="sub-title">Post</div>
                        <div className="sub-icon text-[1.5rem] text-black">
                          <FiUsers />
                        </div>
                      </button>
                    </div>

                    <div className="sub-item ">
                      <button
                        onClick={handleStoryToggle}
                        className="w-full px-3 py-2 hover:bg-[#f2f2f2] flex justify-between items-center"
                      >
                        <div className="sub-title">Story</div>
                        <div className="sub-icon text-[1.6rem] text-black">
                          <MdAutoGraph />
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

          {user && (
            <Modal title="Create new user" inside="true" rounded="12px">
              <form className="w-full p-5">
                <div>
                  <label>
                    <span className="font-medium text-slate-700">
                      User Name
                    </span>
                    <input
                      type="text"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">
                      User Photo
                    </span>
                    <input
                      type="file"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full font-semibold text-white bg-blue-500 hover:bg-blue-600 outline-none px-3 py-2.5 rounded-sm border mt-1"
                  >
                    Create User
                  </button>
                </div>
              </form>
            </Modal>
          )}

          {/* Create Post Modal */}
          {post && (
            <Modal title="Create new post" width="40%" rounded="12px">
              <form className="w-full p-5">
                <div>
                  <label>
                    <span className="font-medium text-slate-700">
                      Anthor Name
                    </span>
                    <input
                      type="text"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">
                      User Name
                    </span>
                    <input
                      type="text"
                      className="w-full lowercase outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">Status</span>

                    <select className="w-full outline-none px-3 py-2 border mt-1">
                      <option value="" selected>
                        - Select -
                      </option>
                      <option value="false">Unverified</option>
                      <option value="true">Verified</option>
                    </select>
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">
                      Anthor Photo
                    </span>
                    <input
                      type="file"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">
                      Post Title
                    </span>
                    <input
                      type="text"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    <span className="font-medium text-slate-700">
                      Post Content
                    </span>

                    <textarea className="w-full outline-none px-3 py-2 border mt-1"></textarea>
                  </label>
                </div>
                <div className="mt-2">
                  <label>
                    <span className=" font-medium text-slate-700">
                      Post Photo
                    </span>
                    <input
                      type="file"
                      className="w-full outline-none px-3 py-2 border mt-1"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full font-semibold text-white bg-blue-500 hover:bg-blue-600 outline-none px-3 py-2.5 rounded-sm border mt-1"
                  >
                    Create Post
                  </button>
                </div>
              </form>
            </Modal>
          )}

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
