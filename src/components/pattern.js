import React from "react";
import Step from "./step";
import styled from "styled-components";

const Pattern = ({ data, handleStepChange }) => {
  return (
    <Row>
      <Label>{data.name}</Label>
      {createSteps(data.steps, handleStepChange)}
    </Row>
  );
};
const createSteps = (list, handleStepChange) => {
  return list.map((stepObj, index) => {
    const onClick = () => {
      const { patternId, onClick } = handleStepChange();
      onClick({
        patternId,
        column: stepObj.id,
        values: { ...stepObj, active: !stepObj.active },
      });
    };
    return <Step key={`step-${index}`} data={stepObj} onClick={onClick} />;
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
