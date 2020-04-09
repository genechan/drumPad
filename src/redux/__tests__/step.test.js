import reducer from "../reducer";
import Actions from "../actions";
import CONSTANTS from "../../constants";

describe("Test the step features", () => {
  it("Sets a single step for a given pattern", () => {
    const sequence = CONSTANTS.SEQUENCE;
    const selectedSequence = sequence[0];
    const patternId = 1;
    const column = 1;
    const values = {
      active: true,
      focus: true,
    };
    let newPattern;
    const pattern = selectedSequence.pattern.map((patternObj) => {
      if (patternObj.id === patternId) {
        newPattern = { ...patternObj };
        const steps = patternObj.steps.map((stepObj, index) => {
          if (index + 1 === column) {
            return { ...stepObj, ...values };
          }
          return { ...stepObj };
        });
        return { ...patternObj, steps };
      }
      return patternObj;
    });
    const newSequence = [
      { ...selectedSequence, pattern },
      ...sequence.slice(1),
    ];
    expect(
      reducer(
        {
          sequence,
          selectedSequence,
          selectedPattern: CONSTANTS.PATTERN_TEMPLATE,
        },
        {
          type: Actions.UPDATE_SINGLE_STEP,
          payload: {
            patternId,
            column,
            values,
          },
        }
      )
    ).toStrictEqual({
      sequence: newSequence,
      selectedSequence: {
        ...selectedSequence,
        pattern,
      },
      selectedPattern: newPattern,
    });
  });
  it("Sets all the steps in a column for all pattern given a column index", () => {
    const column = 1;
    const values = {
      active: true,
      focus: true,
    };
    const sequence = [...CONSTANTS.SEQUENCE];
    const selectedSequence = { ...sequence[0] };
    const newSelectedSequence = {
      ...selectedSequence,
      pattern: selectedSequence.pattern.map((patObj) => {
        return {
          ...patObj,
          steps: patObj.steps.map((stepObj) => {
            if (column === stepObj.id) {
              return { ...stepObj, ...values };
            }
            return { ...stepObj };
          }),
        };
      }),
    };
    const newSequence = sequence.map((seqObj) => {
      if (seqObj.id === newSelectedSequence.id) {
        return { ...newSelectedSequence };
      }
      return { ...seqObj };
    });
    expect(
      reducer(
        { countColumn: column, sequence, selectedSequence },
        {
          type: Actions.UPDATE_ALL_STEPS_ON_BEAT,
          payload: {
            column,
            values,
          },
        }
      )
    ).toStrictEqual({
      countColumn: column + 1,
      sequence: newSequence,
      selectedSequence: newSelectedSequence,
      selectedPattern: undefined,
    });
  });
});
