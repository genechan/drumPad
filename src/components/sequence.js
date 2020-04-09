import React from "react";
import Pattern from "./pattern";

const Sequence = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
      {createPattern(data.pattern)}
    </div>
  );
};
const createPattern = (list) => {
  return list.map((pattern, index) => (
    <Pattern key={`pattern-${index}`} data={pattern} />
  ));
};
export default Sequence;
