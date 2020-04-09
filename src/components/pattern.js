import React from "react";
import Step from "./step";
import styled from "styled-components";

const Pattern = ({ data }) => {
  return (
    <Row>
      <Label>{data.name}</Label>
      {createSteps(data.steps)}
    </Row>
  );
};
const createSteps = (list) => {
  return list.map((stepObj, index) => {
    return <Step key={`step-${index}`} data={stepObj} />;
  });
};
const Row = styled.div`
  width: 60em;
`;
const Label = styled.span`
  margin: 0.5em;
  width: 2em;
  display: inline-block;
`;
export default Pattern;
