import { RESET_ERROR, SET_ERROR } from "../types";

export const setError = (key, value) => async (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: { key, value },
  });
};

export const resetError = (key) => async (dispatch) => {
  dispatch({
    type: RESET_ERROR,
    payload: key,
  });
};
