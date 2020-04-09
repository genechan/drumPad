import React from "react";
import Step from "./step";

import styled from "styled-components";
const Legend = () => {
  return (
    <Wrapper>
      <p>Step Legend:</p>
      <Info>
        <Step data={{ focus: false, active: false }} />
        <p>Normal Step</p>
      </Info>
      <Info>
        <Step data={{ focus: true, active: false }} />
        <p>Focus Step</p>
      </Info>
      <Info>
        <Step data={{ focus: false, active: true }} />
        <p>Selected Step</p>
      </Info>
      <Info>
        <Step data={{ focus: true, active: true }} />
        <p>Selected and focus Step</p>
      </Info>
    </Wrapper>
  );
};
const Info = styled.div`
  display: inline-block;
  margin: 0 1em;
  text-align: center;
`;
const Wrapper = styled.div`
  margin: 1em;
  padding: 0.25em;
  border: 1px solid black;
  width: fit-content;
`;
export default Legend;
