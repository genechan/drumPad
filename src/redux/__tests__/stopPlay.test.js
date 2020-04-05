import reducer from "../reducer";
import Actions from "../actions";

describe("Test stop and play from the reducer", () => {
  it("Gets the default stop at the start of the app", () => {
    expect(reducer({}, { type: Actions.IS_PLAYING })).toStrictEqual({
      isPlaying: false,
    });
  });
  it("Set the Play flag to true", () => {
    expect(
      reducer({}, { type: Actions.SET_PLAY, payload: true })
    ).toStrictEqual({
      isPlaying: true,
    });
  });
  it("Set the Play flag to false", () => {
    expect(
      reducer({}, { type: Actions.SET_PLAY, payload: false })
    ).toStrictEqual({
      isPlaying: false,
    });
  });
  it("Set the Play flag from true to false", () => {
    expect(
      reducer({ isPlaying: true }, { type: Actions.SET_PLAY, payload: false })
    ).toStrictEqual({
      isPlaying: false,
    });
  });
  it("Set the Play flag from false to true", () => {
    expect(
      reducer({ isPlaying: false }, { type: Actions.SET_PLAY, payload: true })
    ).toStrictEqual({
      isPlaying: true,
    });
  });
});
