const CreatedAt = ({ time, date = "Time" }) => {
  return (
    <>
      <div className="created">
        <span
          title={date}
          className="text-sm font-normal text-slate-500 cursor-pointer"
        >
          {time && time}
        </span>
      </div>
    </>
  );
};

export default CreatedAt;
