const SingleStory = ({ photo, name }) => {
  return (
    <>
      <div className="single-story inline-block cursor-pointer">
        <div className="user-photo w-16 h-16 rounded-full bg-gradient-to-tr from-red-400 to-blue-500 p-0.5">
          <img
            className="w-full h-full rounded-full object-cover border-2 border-solid border-white"
            src={photo}
            alt=""
          />
        </div>
        <div className="user-name text-center mt-1.5">
          <h3 className="text-xs">{name}</h3>
        </div>
      </div>
    </>
  );
};

export default SingleStory;
