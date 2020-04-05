import reducer from "../reducer";
import Actions from "../actions";
import CONSTANTS from "../../constants";

describe("Test the sequence selection on the reducer store", () => {
  it("Has the default 3 sequence", () => {
    expect(reducer({}, { type: Actions.GET_SEQUENCE })).toStrictEqual({
      sequence: CONSTANTS.SEQUENCE,
    });
  });
  it("Adds a new sequence", () => {
    let newSequence = { ...CONSTANTS.SEQUENCE_TEMPLATE, id: 4 };
    expect(
      reducer(
        { sequence: [...CONSTANTS.SEQUENCE] },
        {
          type: Actions.ADD_SEQUENCE,
          payload: newSequence,
        }
      )
    ).toStrictEqual({
      sequence: [...CONSTANTS.SEQUENCE, newSequence],
    });
  });
  it("Don't add a new sequence with duplicate Id ", () => {
    const newSequence = { ...CONSTANTS.SEQUENCE_TEMPLATE, id: 1 };
    expect(
      reducer(
        { sequence: [...CONSTANTS.SEQUENCE] },
        {
          type: Actions.ADD_SEQUENCE,
          payload: newSequence,
        }
      )
    ).toStrictEqual({
      sequence: [...CONSTANTS.SEQUENCE],
    });
  });
  it("Deletes a sequence", () => {
    const newSequence = { ...CONSTANTS.SEQUENCE_TEMPLATE, id: 4 };
    const sequence = [...CONSTANTS.SEQUENCE, newSequence];
    expect(
      reducer(
        { sequence: [...sequence] },
        {
          type: Actions.DELETE_SEQUENCE,
          payload: 4,
        }
      )
    ).toStrictEqual({
      sequence: [...CONSTANTS.SEQUENCE],
    });
  });
  it("Sets a selected sequence", () => {
    const selectedSequence = CONSTANTS.SEQUENCE.find(({ id }) => id === 1);
    expect(
      reducer(
        { sequence: [...CONSTANTS.SEQUENCE] },
        {
          type: Actions.SET_SELECTED_SEQUENCE,
          payload: 1,
        }
      )
    ).toStrictEqual({
      sequence: [...CONSTANTS.SEQUENCE],
      selectedSequence: { ...selectedSequence },
    });
  });
  it("Clear a selected sequence", () => {
    expect(
      reducer(
        { sequence: [...CONSTANTS.SEQUENCE] },
        {
          type: Actions.SET_SELECTED_SEQUENCE,
        }
      )
    ).toStrictEqual({
      sequence: [...CONSTANTS.SEQUENCE],
      selectedSequence: undefined,
    });
  });
});
