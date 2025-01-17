import { useState } from "react";

/**
 * Form data manage hook
 * @param {*} data
 * @returns
 */
const useInput = (data) => {
  // state
  const [input, setInput] = useState(data);

  // onChange input field
  const hangleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { input, setInput, hangleInputChange };
};

// export default
export default useInput;
