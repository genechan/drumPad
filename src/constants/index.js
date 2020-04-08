//INFO: BPM reference https://en.scratch-wiki.info/wiki/Tempo_(value)
import {
  sequence1,
  sequence2,
  sequence3,
  sequenceTemplate,
  patternTemplate,
  defaultPattenIds,
} from "./sequence";
export default {
  BPM: 60,
  MAX_BPM: 500,
  MIN_BPM: 20,
  IS_PLAYING: false,
  SEQUENCE: [{ ...sequence1 }, { ...sequence2 }, { ...sequence3 }],
  SEQUENCE_TEMPLATE: { ...sequenceTemplate },
  PATTERN_TEMPLATE: { ...patternTemplate },
  DEFAULT_PATTERN_IDS: [...defaultPattenIds],
  DEFAULT_NUM_STEPS: 16,
  MAX_COLUMN: 16,
};
