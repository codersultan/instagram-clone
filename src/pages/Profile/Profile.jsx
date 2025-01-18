const Profile = () => {
  return (
    <>
      <div className="profile-page">
        <div className="  mx-[300px] h-screen py-48 flex items-center justify-center gap-8">
          <div className="photo">
            <img
              className="w-36 h-36 rounded-full object-cover"
              src="../../../public/Kalimi.jpg"
              alt=""
            />
          </div>

          <div className="info self-center">
            <h1 className="text-3xl font-bold">Kalimi Sultan</h1>
            <p className="text-lg font-semibold  mt-2">MERN Stack Developer</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              perspiciatis id unde libero dolorum, magni sed dignissimos
              deleniti dolores saepe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
