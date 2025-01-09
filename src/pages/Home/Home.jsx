import UsersInfoCard from "../../components/UsersInfo/UsersInfoCard";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="container mx-auto px-64 mt-5 ">
          <div className="home-wrapper flex justify-between gap-16 pr-4">
            <div className="post-wrapper w-8/12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea
                nemo aperiam magnam et soluta quod asperiores repellat deserunt,
                est earum dolor nesciunt provident impedit suscipit recusandae,
                consequatur placeat velit ratione? Quidem nesciunt autem, quo
                nulla repellat voluptates? Aliquam, officiis?
              </p>
            </div>
            <div className="users-wrapper w-4/12 pl-3 pr-4">
              <div className="personal-profile-info mt-4">
                <UsersInfoCard
                  userName="codersultan"
                  profileName="Kalimi Sultan"
                  btnText="Switch"
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
                      userName="codersultan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userName="codersultan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userName="codersultan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userName="codersultan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                  <div className="user-item py-2">
                    <UsersInfoCard
                      userName="codersultan"
                      followedBy="Followed by abdulalim19143 +..."
                      btnText="Switch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="quick-info-urls">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
