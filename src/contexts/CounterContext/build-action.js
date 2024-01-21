import * as actionTypes from './actions-types';
import { AsyncIncrease, asyncErrorIncrease } from './async_increase';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload: payload }),
    asyncIncreaseStart: () => AsyncIncrease(dispatch, actionTypes),
    asyncIncreaseError: () => asyncErrorIncrease(dispatch, actionTypes),
  };
};
