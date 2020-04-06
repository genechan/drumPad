import reducer from "../reducer";
import Actions from "../actions";
import CONSTANTS from "../../constants";

describe("Test the changes with the patterns in the sequence on the reducer store", () => {
  it("Gets the pattern of selected sequence", () => {
    const newSequence = { ...CONSTANTS.SEQUENCE_TEMPLATE };
    expect(
      reducer(
        { selectedSequence: newSequence },
        {
          type: Actions.GET_PATTERNS,
          payload: newSequence.id,
        }
      )
    ).toStrictEqual({
      selectedSequence: newSequence,
      selectedPattern: newSequence.pattern,
    });
  });
  it("Add new pattern to a the selected sequence", () => {
    const newPattern = {
      ...CONSTANTS.PATTERN_TEMPLATE,
      name: "ADDING PATTERN",
    };
    const state = reducer(
      {
        sequence: [...CONSTANTS.SEQUENCE],
        selectedSequence: CONSTANTS.SEQUENCE[0],
      },
      {
        type: Actions.ADD_PATTERN,
        payload: newPattern,
      }
    );
    expect(state.selectedSequence).toStrictEqual({
      ...CONSTANTS.SEQUENCE[0],
      pattern: [...CONSTANTS.SEQUENCE[0].pattern, newPattern],
    });
    expect(state.selectedPattern).toStrictEqual(newPattern);
    expect(state.sequence).toStrictEqual([
      {
        ...CONSTANTS.SEQUENCE[0],
        pattern: [...CONSTANTS.SEQUENCE[0].pattern, newPattern],
      },
      ...CONSTANTS.SEQUENCE.slice(1),
    ]);
  });
  it("Removes a pattern from a the selected sequence", () => {
    const testSequence = { ...CONSTANTS.SEQUENCE_TEMPLATE };
    const removeId = testSequence.pattern[0].id;
    const newPattern = testSequence.pattern.slice(1);
    expect(
      reducer(
        {
          sequence: [CONSTANTS.SEQUENCE, testSequence],
          selectedSequence: testSequence,
          selectedPattern: testSequence.pattern[0],
        },
        {
          type: Actions.REMOVE_PATTERN,
          payload: removeId,
        }
      )
    ).toStrictEqual({
      sequence: [CONSTANTS.SEQUENCE, testSequence],
      selectedSequence: { ...testSequence, pattern: newPattern },
      selectedPattern: undefined,
    });
  });
});
