import React from "react";
import Step from "../step";
export default { title: "Step" };
export const DefaultStep = () => (
  <Step
    data={{
      focus: false,
      active: false,
    }}
  />
);
export const FocusStep = () => (
  <Step
    data={{
      focus: true,
      active: false,
    }}
  />
);
export const ActiveStep = () => (
  <Step
    data={{
      focus: false,
      active: true,
    }}
  />
);
export const FocusAndActiveStep = () => (
  <Step
    data={{
      focus: true,
      active: true,
    }}
  />
);
