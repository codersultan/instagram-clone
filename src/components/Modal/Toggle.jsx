const Toggle = ({ width = "200px", children }) => {
  return (
    <>
      <div
        style={{ width }}
        className="toggle-box overflow-hidden absolute z-50 bg-white shadow-md rounded-md"
      >
        {children}
      </div>
    </>
  );
};

export default Toggle;
