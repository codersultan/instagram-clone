import { useEffect, useRef, useState } from "react";

/**
 * Toggle or Modal feature control
 * @returns
 */
const useToggle = () => {
  // state
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef();

  // toggle feature
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // toggle close
  const handleToggleClose = (e) => {
    if (
      (toggleRef.current && !toggleRef.current.contains(e.target)) ||
      e.target.classList.contains("toggle-close")
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleToggleClose);

    return () => {
      document.removeEventListener("click", handleToggleClose);
    };
  }, []);

  return { toggle, setToggle, handleToggle, toggleRef };
};

// export default
export default useToggle;
