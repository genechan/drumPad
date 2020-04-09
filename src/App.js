import React from "react";
import Actions from "./redux/actions";
import { Sequence, Controls, Legend } from "./components";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((store) => store.isPlaying);
  const timerId = useSelector((store) => store.timerId);
  const selectedSequence = useSelector((store) => store.selectedSequence);
  const sequence = useSelector(({ sequence }) => sequence);
  const BPM = useSelector((store) => store.BPM);
  React.useEffect(() => {
    dispatch({
      type: Actions.LOAD_DATA,
    });
  }, []);
  React.useEffect(() => {
    if (isPlaying && timerId === undefined) {
      const delay = (((60 / BPM) * 4) / 8) * 1000;
      const id = setInterval(() => {
        dispatch({
          type: Actions.UPDATE_ALL_STEPS_ON_BEAT,
          payload: {
            values: { focus: true },
          },
        });
      }, delay);
      dispatch({
        type: Actions.UPDATE_TIMER_ID,
        payload: id,
      });
    } else if (!isPlaying) {
      clearInterval(timerId);
      dispatch({
        type: Actions.UPDATE_TIMER_ID,
        payload: undefined,
      });
    }
  }, [isPlaying, timerId]);
  return (
    <div>
      <Controls
        bpmValue={BPM}
        onChangeBPM={onChangeBPM(dispatch)}
        onChangePlay={onChangePlay(dispatch, isPlaying)}
        sequenceList={sequence}
        selectedSequenceId={selectedSequence.id}
        onChangeSequence={onChangeSequence(dispatch)}
      />
      <Sequence data={selectedSequence} onClickStep={onClickStep(dispatch)} />
      <Legend />
    </div>
  );
};

export const onChangeBPM = (dispatch) => {
  return (e) => {
    dispatch({
      type: Actions.SET_BPM,
      payload: Number(e.target.value),
    });
  };
};

export const onChangePlay = (dispatch, isPlaying) => {
  return () => {
    dispatch({
      type: Actions.SET_PLAY,
      payload: !isPlaying,
    });
  };
};
export const onChangeSequence = (dispatch) => {
  return (e) => {
    dispatch({
      type: Actions.SET_SELECTED_SEQUENCE,
      payload: Number(e.target.value),
    });
  };
};

export const onClickStep = (dispatch) => {
  return (payload) => {
    dispatch({
      type: Actions.UPDATE_SINGLE_STEP,
      payload,
    });
  };
};
export default App;
