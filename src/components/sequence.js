import React from "react";
import Pattern from "./pattern";

const Sequence = ({ data, onClickStep }) => {
  return (
    <div>
      <div>{data.name}</div>
      {createPattern(data.pattern, onClickStep)}
    </div>
  );
};
const createPattern = (list, onClickStep) => {
  return list.map((pattern, index) => {
    const onClick = () => {
      return {
        patternId: pattern.id,
        onClick: onClickStep,
      };
    };
    return (
      <Pattern
        key={`pattern-${index}`}
        data={pattern}
        handleStepChange={onClick}
      />
    );
  });
};
export default Sequence;
