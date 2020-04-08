const timer = (delay, callBack) => {
  const id = setInterval(() => {
    callBack();
  }, delay);
  return id;
};
export default timer;
