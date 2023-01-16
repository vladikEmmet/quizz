import React from "react";

const CustomBtn = ({ handleClick, value, children, isSelected }) => {
  return (
    <button
      className={["settings-btn", isSelected ? "selected" : ""].join(" ")}
      onClick={() => handleClick(value)}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
