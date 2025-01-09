const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className="container w-auto">
          <div className=" h-screen flex flex-col justify-center items-center text-center gap-6">
            <h2 className="text-2xl font-semibold">
              Sorry, this page isn't available.
            </h2>
            <p>
              The link you followed may be broken, or the page may have been
              removed. Go back to Instagram.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
