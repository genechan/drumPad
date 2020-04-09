import React from "react";
import CONSTANTS from "../constants";
const BPM = ({ value, onChange }) => {
  return (
    <>
      <div>
        <p>Max BPM is 500</p>
        <p>
          BPM reference{" "}
          <a href="https://en.scratch-wiki.info/wiki/Tempo_(value)">
            https://en.scratch-wiki.info/wiki/Tempo_(value)
          </a>
        </p>
        <p>But this number can be anything</p>
      </div>
      <label htmlFor="bpm">
        BPM:&nbsp;
        <input
          id="bpm"
          type="number"
          value={Number(value)}
          onChange={onChange}
        />
      </label>
    </>
  );
};
export default BPM;
