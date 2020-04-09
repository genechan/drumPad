import React from "react";
import styled from "styled-components";
const Step = ({ data }) => {
  return <Button focus={data.focus}>Step</Button>;
};
const Button = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: 0.25em;
  padding: 0.25em;
  border: solid;
  color: ${(props) => props.focus && "yellowgreen"};
`;
export default Step;
