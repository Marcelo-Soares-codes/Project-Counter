export const AsyncIncrease = async (dispatch, actionTypes) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
      resolve('RESOLVED');
    }, 2000);
  });
};

export const asyncErrorIncrease = async (dispatch, actionTypes) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
      reject(new Error('Deu ruim!'));
    }, 2000);
  });
};
