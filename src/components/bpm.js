import React from "react";
import CONSTANTS from "../constants";
const BPM = ({ value, onChange }) => {
  return (
    <label htmlFor="bpm">
      BPM:&nbsp;
      <input
        id="bpm"
        type="number"
        min={CONSTANTS.MIN_BPM}
        max={CONSTANTS.MAX_BPM}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default BPM;
