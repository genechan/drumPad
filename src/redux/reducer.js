import Actions from "./actions";
import CONSTANTS from "../constants";

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case Actions.LOAD_DATA: {
      return { ...defaultState };
    }
    case Actions.UPDATE_TIMER_ID: {
      return { ...state, timerId: payload };
    }
    case Actions.GET_BPM: {
      return {
        ...state,
        BPM: isNaN(state.BPM) ? defaultState.BPM : state.BPM,
      };
    }
    case Actions.SET_BPM: {
      return setBPM(state, payload);
    }
    case Actions.IS_PLAYING: {
      return {
        ...state,
        isPlaying:
          state.isPlaying === undefined
            ? CONSTANTS.IS_PLAYING
            : state.isPlaying,
      };
    }
    case Actions.SET_PLAY: {
      return {
        ...state,
        isPlaying: payload ? true : false,
      };
    }
    case Actions.GET_SEQUENCE: {
      return {
        ...state,
        sequence: state.sequence || defaultState.sequence,
      };
    }
    case Actions.ADD_SEQUENCE: {
      const sequenceId = state.sequence.map(({ id }) => id);
      if (sequenceId.indexOf(payload.id) < 0) {
        return {
          ...state,
          sequence: [...state.sequence, { ...payload }],
        };
      }
      return { ...state };
    }
    case Actions.DELETE_SEQUENCE: {
      return {
        ...state,
        sequence: state.sequence.filter(({ id }) => id !== payload),
      };
    }
    case Actions.SET_SELECTED_SEQUENCE: {
      if (!isNaN(payload) && payload !== null) {
        return {
          ...state,
          selectedSequence: {
            ...state.sequence.find(({ id }) => id === payload),
          },
        };
      }
      return { ...state, selectedSequence: undefined };
    }
    case Actions.GET_PATTERNS: {
      if (!isNaN(payload) && payload !== null) {
        return {
          ...state,
          selectedPattern: state.selectedSequence.pattern,
        };
      }
      return { ...state };
    }
    case Actions.ADD_PATTERN: {
      return addNewPattern(state, payload);
    }
    case Actions.REMOVE_PATTERN: {
      return removePattern(state, payload);
    }
    case Actions.UPDATE_SINGLE_STEP: {
      return setSingleStep(state, payload);
    }
    case Actions.UPDATE_ALL_STEPS_ON_BEAT: {
      return updateAllStepsOnBeat(state, payload);
    }
    default:
      return { ...state };
  }
};
/**
 * Set the beats per minute
 * @param  {} state the Redux store
 * @param  {} payload the number for the BPM
 */
export const setBPM = (state, payload) => {
  let BPM = isNaN(payload) || payload === null ? defaultState.BPM : payload;
  BPM = BPM < CONSTANTS.MIN_BPM ? CONSTANTS.MIN_BPM : BPM;
  BPM = BPM > CONSTANTS.MAX_BPM ? CONSTANTS.MAX_BPM : BPM;
  return {
    ...state,
    BPM,
    isPlaying: false,
  };
};
/**
 * Adds new pattern to a sequence
 * @param  {} state the Redux store
 * @param  {} payload the new pattern object
 */
export const addNewPattern = (state, payload) => {
  let updatedSequence;
  const patternIds = [...(state.patternIds || defaultState.patternIds)];
  //INFO to preserve the order of the pattern in the sequence
  const sequence = state.sequence.map((seq) => {
    if (
      seq.id === state.selectedSequence.id &&
      patternIds.indexOf(payload.id) < 0
    ) {
      patternIds.push(payload.id);
      updatedSequence = {
        ...seq,
        pattern: [...seq.pattern, { ...payload }],
      };
      return { ...updatedSequence };
    }
    return { ...seq };
  });
  return {
    ...state,
    sequence,
    selectedSequence: updatedSequence,
    selectedPattern: { ...payload },
    patternIds,
  };
};
/**
 * Removes a pattern from the selected sequence
 * @param  {} state the Redux store
 * @param  {} payload the id of the pattern to remove
 */
export const removePattern = (state, payload) => {
  const pattern = state.selectedSequence.pattern.filter(
    ({ id }) => id !== payload
  );
  const selectedSequence = {
    ...state.selectedSequence,
    pattern,
  };
  const selectedPattern =
    state.selectedPattern.id !== payload ? state.selectedPattern : undefined;
  return { ...state, selectedSequence, selectedPattern };
};
/**
 * Updates a single step in a pattern
 * @param  {} state the Redux store
 * @param  {} payload has the patternId and values for a column to update
 */
export const setSingleStep = (state, payload) => {
  const selectedSequence = state.selectedSequence;
  const pattern = selectedSequence.pattern.map((patternObj) => {
    if (patternObj.id === payload.patternId) {
      const steps = patternObj.steps.map((stepObj, index) => {
        if (index === payload.column) {
          return { ...stepObj, ...payload.values };
        }
        return { ...stepObj };
      });
      return { ...patternObj, steps };
    }
    return patternObj;
  });
  let newSelectedSequence;
  const sequence = state.sequence.map((seqObj) => {
    if (seqObj.id === selectedSequence.id) {
      newSelectedSequence = { ...seqObj, pattern };
      return newSelectedSequence;
    }
    return { ...seqObj };
  });
  return {
    ...state,
    sequence,
    selectedSequence: newSelectedSequence,
    selectedPattern:
      state.selectedPattern.id === payload.patternId
        ? undefined
        : state.selectedPattern,
  };
};
/**
 * Update all the steps in all the patterns on the redux store for a beat
 * @param  {} state the Redux store
 * @param  {} payload has the column to update for all the patterns and the values to update them with
 */
export const updateAllStepsOnBeat = (state, payload) => {
  const selectedSequence = {
    ...state.selectedSequence,
    pattern: state.selectedSequence.pattern.map((patObj) => {
      return {
        ...patObj,
        steps: patObj.steps.map((stepObj, index) => {
          if (index + 1 === state.countColumn) {
            return { ...stepObj, ...payload.values };
          }
          return { ...stepObj, focus: false };
        }),
      };
    }),
  };
  const sequence = state.sequence.map((seqObj) => {
    if (seqObj.id === selectedSequence.id) {
      return { ...selectedSequence };
    }
    return { ...seqObj };
  });
  let countColumn = state.countColumn;
  if (countColumn >= CONSTANTS.MAX_COLUMN) {
    countColumn = 1;
  } else {
    ++countColumn;
  }
  return {
    ...state,
    sequence,
    selectedSequence,
    selectedPattern: undefined,
    countColumn,
  };
};

export const defaultState = {
  BPM: CONSTANTS.BPM,
  isPlaying: CONSTANTS.IS_PLAYING,
  sequence: CONSTANTS.SEQUENCE,
  selectedSequence: CONSTANTS.SEQUENCE[0],
  selectedPattern: undefined,
  patternIds: [...CONSTANTS.DEFAULT_PATTERN_IDS],
  countColumn: 1,
};
export default reducer;
