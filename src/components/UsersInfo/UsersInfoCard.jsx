import { Link } from "react-router-dom";
import UserName from "./UserName";

const UsersInfoCard = ({
  userName,
  verify,
  profileName,
  userPhoto,
  followedBy,
  btnText,
}) => {
  return (
    <>
      <div className="user-info flex justify-between items-center">
        <div className="info-box flex items-center gap-3">
          <div className="user-photo">
            <img
              className="w-11 h-11 rounded-full cursor-pointer object-cover"
              src={userPhoto}
              alt=""
            />
          </div>
          <div className="user-meta">
            {userName && <UserName name={userName} verified={verify} />}
            {profileName && (
              <h2 className="-mt-[2px] text-sm font-normal text-slate-500">
                {profileName}
              </h2>
            )}
            {followedBy && (
              <h3 className="-mt-[2px] text-xs font-normal text-slate-500">
                {followedBy}
              </h3>
            )}
          </div>
        </div>
        <div className="user-btn">
          <Link
            className="text-xs font-semibold text-blue-500 hover:text-blue-700"
            to=""
          >
            {btnText && btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default UsersInfoCard;
