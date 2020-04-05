//INFO: BPM reference https://en.scratch-wiki.info/wiki/Tempo_(value)
import { sequence1, sequence2, sequence3, sequenceTemplate } from "./sequence";
export default {
  BPM: 60,
  MAX_BPM: 500,
  MIN_BPM: 20,
  IS_PLAYING: false,
  SEQUENCE: [{ ...sequence1 }, { ...sequence2 }, { ...sequence3 }],
  SEQUENCE_TEMPLATE: { ...sequenceTemplate },
};
