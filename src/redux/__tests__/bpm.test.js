import reducer from "../reducer";
import Actions from "../actions";
import CONSTANTS from "../../constants";

describe("Test for BPM Beats per minute", () => {
  it("Returns the default BPM", () => {
    expect(reducer({}, { type: Actions.GET_BPM })).toStrictEqual({
      BPM: CONSTANTS.BPM,
    });
  });
  it("Sets the BPM", () => {
    const BPM = 120;
    expect(reducer({}, { type: Actions.SET_BPM, payload: BPM })).toStrictEqual({
      BPM,
    });
  });
  it("Set the default BPM when given a undefined", () => {
    expect(
      reducer({}, { type: Actions.SET_BPM, payload: undefined })
    ).toStrictEqual({
      BPM: CONSTANTS.BPM,
    });
  });
  it("Set the default BPM when given a null", () => {
    expect(reducer({}, { type: Actions.SET_BPM, payload: null })).toStrictEqual(
      {
        BPM: CONSTANTS.BPM,
      }
    );
  });
  it("Set the default BPM when given a NaN", () => {
    expect(reducer({}, { type: Actions.SET_BPM, payload: NaN })).toStrictEqual({
      BPM: CONSTANTS.BPM,
    });
  });
  it("Set the min BPM when given a < 0", () => {
    expect(reducer({}, { type: Actions.SET_BPM, payload: -1 })).toStrictEqual({
      BPM: CONSTANTS.MIN_BPM,
    });
  });
  it("Set the default BPM when given above the max", () => {
    expect(
      reducer({}, { type: Actions.SET_BPM, payload: Infinity })
    ).toStrictEqual({
      BPM: CONSTANTS.MAX_BPM,
    });
  });
});
