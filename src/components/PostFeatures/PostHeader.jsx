import { HiOutlineDotsHorizontal } from "react-icons/hi";
import UserName from "../UsersInfo/UserName";

const PostHeader = ({ photo, userName, title }) => {
  return (
    <>
      <div className="post-header flex justify-between items-center">
        <div className="post-user flex items-center">
          <div className="user-info flex items-center gap-2">
            <div className="user-photo">
              <img
                className="w-8 h-8 rounded-full cursor-pointer object-cover"
                src={photo}
                alt=""
              />
            </div>

            <div className="post-info">
              <div className="post-user-info flex items-center">
                <div className="user-name">
                  <UserName name="codersultan" verified="true" />
                </div>

                <div className="created flex items-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-slate-500 mx-1"></div>
                  <div className="time ml-1">
                    <span
                      title="Time"
                      className="text-sm font-normal text-slate-500 cursor-pointer"
                    >
                      23h
                    </span>
                  </div>
                </div>
              </div>

              <div className="post-title -mt-2">
                {title && (
                  <span className="text-xs font-normal cursor-pointer">
                    {title}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="post-btn">
          <button title="More options" className="p-1 text-xl  text-slate-700">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
