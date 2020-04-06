export const makeSteps = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push({
      ...step,
    });
  }
  return [...array];
};
export const step = {
  id: -1,
  active: false,
  focus: false,
};
export const patternTemplate = {
  id: -1,
  name: undefined,
  orderNum: 0,
  steps: makeSteps(16),
};
export const kickPattern = {
  id: 1,
  name: "Kick",
  orderNum: 0,
  steps: makeSteps(16),
};
export const snarePattern = {
  id: 2,
  name: "Snare",
  orderNum: 0,
  steps: makeSteps(16),
};
export const openHatPattern = {
  id: 3,
  name: "Open Hat",
  orderNum: 0,
  steps: makeSteps(16),
};
export const closeHatPattern = {
  id: 4,
  name: "Close Hat",
  orderNum: 0,
  steps: makeSteps(16),
};
export const defaultPattenIds = [1, 2, 3, 4];
export const sequenceTemplate = {
  id: -1,
  name: "New Sequence",
  pattern: [
    { ...kickPattern },
    { ...snarePattern },
    { ...openHatPattern },
    { ...closeHatPattern },
  ],
};
export const sequence1 = {
  id: 1,
  name: "Sequence 1",
  pattern: [
    { ...kickPattern },
    { ...snarePattern },
    { ...openHatPattern },
    { ...closeHatPattern },
  ],
};
export const sequence2 = {
  id: 2,
  name: "Sequence 2",
  pattern: [
    { ...kickPattern },
    { ...snarePattern },
    { ...openHatPattern },
    { ...closeHatPattern },
  ],
};
export const sequence3 = {
  id: 3,
  name: "Sequence 3",
  pattern: [
    { ...kickPattern },
    { ...snarePattern },
    { ...openHatPattern },
    { ...closeHatPattern },
  ],
};
