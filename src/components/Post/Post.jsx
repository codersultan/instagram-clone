import PostContent from "../PostFeatures/PostContent";
import PostHeader from "../PostFeatures/PostHeader";

const Post = () => {
  return (
    <>
      <div className="post-section">
        <div className="post-container">
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
              <div className="actions"></div>
              <div className="destiction"></div>
              <div className="comment"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
