export const makeSteps = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push({
      ...step,
      id: i + 1,
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
export const randomSteps = [
  {
    id: 1,
    active: false,
    focus: false,
  },
  {
    id: 2,
    active: true,
    focus: false,
  },
  {
    id: 3,
    active: false,
    focus: false,
  },
  {
    id: 4,
    active: true,
    focus: false,
  },
  {
    id: 5,
    active: false,
    focus: false,
  },
  {
    id: 6,
    active: true,
    focus: false,
  },
  {
    id: 7,
    active: false,
    focus: false,
  },
  {
    id: 8,
    active: true,
    focus: false,
  },
  {
    id: 9,
    active: false,
    focus: false,
  },
  {
    id: 10,
    active: true,
    focus: false,
  },
  {
    id: 11,
    active: false,
    focus: false,
  },
  {
    id: 12,
    active: true,
    focus: false,
  },
  {
    id: 13,
    active: false,
    focus: false,
  },
  {
    id: 14,
    active: true,
    focus: false,
  },
  {
    id: 15,
    active: false,
    focus: false,
  },
  {
    id: 16,
    active: true,
    focus: false,
  },
];
export const kickPattern = {
  id: 1,
  name: "Kick",
  orderNum: 0,
  steps: makeSteps(16),
};

export const differentKickPattern = {
  id: 2,
  name: "Kick",
  orderNum: 0,
  steps: [...randomSteps],
};
export const snarePattern = {
  id: 3,
  name: "Snare",
  orderNum: 0,
  steps: makeSteps(16),
};
export const differentSnarePattern = {
  id: 4,
  name: "Snare",
  orderNum: 0,
  steps: [...randomSteps],
};
export const openHatPattern = {
  id: 5,
  name: "Open Hat",
  orderNum: 0,
  steps: makeSteps(16),
};

export const differentOpenHatPattern = {
  id: 6,
  name: "Open Hat",
  orderNum: 0,
  steps: [...randomSteps],
};
export const closeHatPattern = {
  id: 7,
  name: "Close Hat",
  orderNum: 0,
  steps: makeSteps(16),
};

export const differentCloseHatPattern = {
  id: 8,
  name: "Close Hat",
  orderNum: 0,
  steps: [...randomSteps],
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
    { ...differentKickPattern },
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
    { ...differentSnarePattern },
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
    { ...differentCloseHatPattern },
  ],
};
