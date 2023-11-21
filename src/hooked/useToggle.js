import React, { useState } from "react";

const useToggle = (initialstate = false) => {
  const [state, setState] = useState(initialstate);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;
