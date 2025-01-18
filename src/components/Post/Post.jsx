import useToggle from "../../hooks/useToggle";
import Modal from "../Modal/Modal";
import PostActions from "../PostFeatures/PostActions";
import PostContent from "../PostFeatures/PostContent";
import PostHeader from "../PostFeatures/PostHeader";
import UserName from "../UsersInfo/UserName";

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
          <div className="post-body my-3 rounded-[4px] overflow-hidden">
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
              {commentModal && (
                <Modal width="auto" height="95%">
                  <div className="edit-modal w-full flex">
                    <div className="post-photo-box w-8/12">
                      <PostContent />
                    </div>
                    <div className="post-content-box w-4/12 max-w-[500px] !min-w-[450px] grid grid-rows-[60px,10fr,230px]">
                      <div className="modal-head border-b pb-3 pt-2 px-4">
                        <PostHeader
                          photo="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
                          userName="codersultan"
                          title="Golden Bridge"
                        />
                      </div>

                      <div className="modal-body max-h-[628px] overflow-y-auto">
                        <div className="comment-box">
                          <div className="comment-item p-4">
                            <div className="flex gap-3">
                              <img
                                className="w-8 h-8 rounded-full cursor-pointer object-cover"
                                src="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
                                alt=""
                              />
                              <UserName name="codersultan" verified="true" />
                            </div>
                            <p className="text-sm ml-11">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Perspiciatis blanditiis est illo nulla
                              quidem exercitationem laudantium repellendus eos
                              doloremque deserunt!
                            </p>
                          </div>

                          <div className="comment-item p-4">
                            <div className="flex gap-3">
                              <img
                                className="w-8 h-8 rounded-full cursor-pointer object-cover"
                                src="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
                                alt=""
                              />
                              <UserName name="codersultan" verified="true" />
                            </div>
                            <p className="text-sm ml-11">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Perspiciatis blanditiis est illo nulla
                              quidem exercitationem laudantium repellendus eos
                              doloremque deserunt!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer border-t ">
                        <div className="modal-post-action p-4">
                          <PostActions />
                        </div>

                        <div className="modal-post-comment border-t py-3 px-4">
                          <form className="flex items-center gap-1">
                            <textarea
                              className="flex-1 text-sm py-1 outline-none h-10 overflow-hidden "
                              type="text"
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
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
