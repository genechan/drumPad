import React from "react";
import styled from "styled-components";
const Step = ({ data, onClick }) => {
  return (
    <Button onClick={onClick} focus={data.focus} active={data.active}>
      &diams;
    </Button>
  );
};
const Button = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: 0.25em;
  padding: 0.25em;
  border: solid;
  text-align: center;
  color: ${(props) => {
    let color = "black";
    if (props.active) {
      return "blue";
    }
    if (props.focus) {
      return "yellowgreen";
    }
    return color;
  }};
  background: ${(props) => {
    if (props.active && props.focus) {
      return "bisque";
    }
  }};
`;
export default Step;
