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
    const pattern = selectedSequence.pattern.map((patternObj) => {
      if (patternObj.id === patternId) {
        const steps = patternObj.steps.map((stepObj, index) => {
          if (index === column) {
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
      selectedPattern: CONSTANTS.PATTERN_TEMPLATE,
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
      pattern: selectedSequence.pattern.map((patObj, index) => {
        return {
          ...patObj,
          steps: patObj.steps.map((stepObj, index) => {
            if (column === index + 1) {
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
        {
          sequence,
          selectedSequence,
        },
        {
          type: Actions.UPDATE_ALL_STEPS_ON_BEAT,
          payload: {
            column,
            values,
          },
        }
      )
    ).toStrictEqual({
      sequence: newSequence,
      selectedSequence: newSelectedSequence,
      selectedPattern: undefined,
    });
  });
});
