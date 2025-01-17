import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import PostActions from "../PostFeatures/PostActions";
import PostContent from "../PostFeatures/PostContent";
import PostHeader from "../PostFeatures/PostHeader";

const Post = () => {
  const { toggle: commentModal, handleToggle: handleCommentModal } =
    useToggle();

  return (
    <>
      <div className="post-item border-b pb-4">
        <div className="post-card">
          <div className="post-head">
            <PostHeader
              photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
              userName="codersultan"
              title="Golden Bridge"
            />
          </div>
          <div className="post-body my-3">
            <PostContent />
          </div>
          <div className="post-footer">
            <div className="actions">
              <PostActions />
            </div>
            <div className="destiction mt-2">
              <p className=" text-sm ">
                <span className="text-sm mr-1 font-semibold cursor-pointer">
                  codersultan
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, nihil.sfdsf
              </p>
            </div>
            <div className="comment mt-2">
              <div className="view-comment">
                <span
                  onClick={handleCommentModal}
                  className="text-sm text-slate-500 cursor-pointer"
                >
                  View 1 comment
                </span>
              </div>
              <div className="add-comment mt-1">
                <form className="flex items-center gap-1">
                  <textarea
                    className="flex-1 text-sm py-1 outline-none h-6 overflow-hidden "
                    type="text"
                    autoCapitalize="off"
                    autoComplete="off"
                    placeholder="Add a comment..."
                  />
                  <button
                    type="submit"
                    className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                  >
                    Post
                  </button>
                </form>
              </div>

              {/* View All Comment Modal */}
              {commentModal && <Modal width="76%" height="95%" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
