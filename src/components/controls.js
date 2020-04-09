import React from "react";
import Button from "./button";
import BPM from "./bpm";

const Controls = ({
  bpmValue = 0,
  onChangeBPM = () => {},
  onChangePlay = () => {},
  sequenceList = [],
  onChangeSequence = () => {},
  selectedSequenceId = -1,
}) => {
  return (
    <div>
      <Button key="stop" label="stop" onClick={onChangePlay} />
      <Button key="play" label="play" onClick={onChangePlay} />
      <BPM value={bpmValue} onChange={onChangeBPM} />
      <select value={selectedSequenceId} onChange={onChangeSequence}>
        {createList(sequenceList)}
      </select>
    </div>
  );
};
const createList = (list) => {
  return list.map((seqObj, index) => {
    return (
      <option key={`sequence-${index}`} value={seqObj.id}>
        {seqObj.name}
      </option>
    );
  });
};
export default Controls;
