import UsersInfoCard from "../../components/UsersInfo/UsersInfoCard";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";
import StorySlider from "../../components/Story/StorySlider";
import Post from "../../components/Post/Post";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="container mx-auto px-64 mt-5 ">
          <div className="home-wrapper flex">
            <div className="post-wrapper w-[61.5%]">
              <div className="story-section">
                <StorySlider />
              </div>
              <div className="post-section mt-7">
                <div className="post-container w-9/12 mx-auto">
                  <Post />
                </div>
              </div>
            </div>
            <div className="users-wrapper w-[38.5%] pl-3 pr-8 ml-16">
              <div className="personal-profile-info mt-4">
                <UsersInfoCard
                  userPhoto="../../../public/Kalimi.jpg"
                  userName="codersultan"
                  profileName="Kalimi Sultan"
                  btnText="Switch"
                  verify="true"
                />
              </div>

              <div className="seggested-users-box mt-[22px]">
                <div className="suggested-users flex justify-between items-center">
                  <h2 className="text-sm font-semibold text-slate-500">
                    Suggested for you
                  </h2>
                  <div className="see-all-btn">
                    <Link
                      className="text-xs font-semibold hover:text-slate-500"
                      to=""
                    >
                      See All
                    </Link>
                  </div>
                </div>
                <div className="suggestex-users-info py-2 ml-2">
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userPhoto="../../../public/Kalimi.jpg"
                      userName="hakim"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                      verify="true"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userPhoto="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                      userName="sarifkhan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userPhoto="https://sicherheitsheld.de/images/primax/team/team-1.jpg"
                      userName="itskahan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynBryvKzWaR8tUKSYDGuCmuY8adeV_NVyy5UFqNDdKnj8H24gozWr75-q0I6pqSTFYvg&usqp=CAU"
                      userName="sumitshah"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userPhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ewgocwoS7K5hmvG2G5Lwx5y18Dsjo1K9j9X6c4lCdE3AGy3FGd6D-oxg2ztellzEgR8&usqp=CAU"
                      userName="jakir"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                </div>
              </div>
              <div className="quick-info-urls">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
