import reducer, { defaultState } from "../reducer";
import Actions from "../actions";
import CONSTANTS from "../../constants";

describe("Test for BPM Beats per minute", () => {
  it("Returns the default BPM", () => {
    expect(
      reducer({ ...defaultState }, { type: Actions.GET_BPM })
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.BPM,
    });
  });
  it("Sets the BPM", () => {
    const BPM = 120;
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: BPM }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM,
    });
  });
  it("Set the default BPM when given a undefined", () => {
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: undefined }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.BPM,
    });
  });
  it("Set the default BPM when given a null", () => {
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: null }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.BPM,
    });
  });
  it("Set the default BPM when given a NaN", () => {
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: NaN }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.BPM,
    });
  });
  it("Set the min BPM when given a < 0", () => {
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: -1 }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.MIN_BPM,
    });
  });
  it("Set the default BPM when given above the max", () => {
    expect(
      reducer(
        {
          ...defaultState,
        },
        { type: Actions.SET_BPM, payload: Infinity }
      )
    ).toStrictEqual({
      ...defaultState,
      BPM: CONSTANTS.MAX_BPM,
    });
  });
});
