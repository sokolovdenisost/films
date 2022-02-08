import { RESET_ERROR, SET_ERROR } from "../types";

export const setError = (key, value) => {
  return {
    type: SET_ERROR,
    payload: { key, value },
  };
};

export const resetError = (key) => {
  return {
    type: RESET_ERROR,
    payload: key,
  };
};
