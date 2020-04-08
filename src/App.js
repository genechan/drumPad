import React from "react";
import Actions from "./redux/actions";

import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((store) => store.isPlaying);
  const timerId = useSelector((store) => store.timerId);
  const countColumn = useSelector((store) => store.countColumn);
  React.useEffect(() => {
    dispatch({
      type: Actions.LOAD_DATA,
    });
  }, []);
  React.useEffect(() => {
    if (isPlaying && timerId === undefined) {
      const id = setInterval(() => {
        dispatch({ type: Actions.UPDATE_COLUMN_COUNT });
        dispatch({
          type: Actions.UPDATE_ALL_STEPS_ON_BEAT,
          payload: {
            column: countColumn,
            values: { focus: true },
          },
        });
      }, 1000);
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
  return <div>LOADING</div>;
};
export default App;
