import React from "react";
import styled from "styled-components";
const Button = ({ label = "button", onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 5em;
  padding: 1em;
  margin: 0.25em;
  font-weight: bolder;
  border-radius: 5em;
  background: silver;
  outline: none;
`;
export default Button;
