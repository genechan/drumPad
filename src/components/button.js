import React from "react";

const Button = ({ label = "button", onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
