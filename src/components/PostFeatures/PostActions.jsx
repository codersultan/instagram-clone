import {
  IoBookmarkOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import CreatedAt from "./CreatedAt";
import { AiOutlineMessage } from "react-icons/ai";
import useToggle from "../../hooks/useToggle";

const PostActions = () => {
  const { toggle: commentModal, handleToggle: handleCommentModal } =
    useToggle();

  return (
    <>
      <div className="post-actions">
        <div className="actions-wrapper flex justify-between">
          <div className="actions-items flex gap-3">
            <div className="like">
              <button className="cursor-pointer text-[1.8rem] text-black hover:text-gray-500">
                <IoHeartOutline title="Like" />
                {/* <IoHeartSharp title="Unlike" /> */}
              </button>
            </div>
            <div className="comment">
              <button
                onClick={handleCommentModal}
                className="cursor-pointer text-[1.7rem] text-black hover:text-gray-500"
              >
                <AiOutlineMessage title="Comment" />
              </button>
            </div>
            <div className="share">
              <button className="cursor-pointer text-[1.7rem] text-black hover:text-gray-500">
                <IoPaperPlaneOutline title="Share" />
              </button>
            </div>
          </div>

          <div className="actions-save">
            <div className="save">
              <button className="cursor-pointer  text-[1.6rem] text-black hover:text-gray-500">
                <IoBookmarkOutline title="Save" />
                {/* <IoBookmark title="Remove" /> */}
              </button>
            </div>
          </div>
        </div>
        <div className="actions-view-wrapper">
          <div className="all-likes">
            <span className="text-sm font-semibold cursor-pointer">
              19 likes
            </span>
          </div>
          <div className="Time text-xs">
            <CreatedAt time="2 hours ago" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostActions;
