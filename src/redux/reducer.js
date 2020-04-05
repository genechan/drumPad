import Actions from "./actions";
import CONSTANTS from "../constants";

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case Actions.HELLO_WORLD:
      return {
        ...state,
        helloWorld: payload,
      };
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
    default:
      return { ...state };
  }
};

export const setBPM = (state, payload) => {
  let BPM = isNaN(payload) || payload === null ? defaultState.BPM : payload;
  BPM = BPM < CONSTANTS.MIN_BPM ? CONSTANTS.MIN_BPM : BPM;
  BPM = BPM > CONSTANTS.MAX_BPM ? CONSTANTS.MAX_BPM : BPM;
  return {
    ...state,
    BPM,
  };
};
export const defaultState = {
  BPM: CONSTANTS.BPM,
  IS_PLAYING: CONSTANTS.IS_PLAYING,
  sequence: [{}, {}, {}],
};
export default reducer;
