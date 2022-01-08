import { RESET_ERROR, SET_ERROR } from "../types";

const initialState = {
  modalErrors: {},
};

export const errorsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, modalErrors: { ...state.modalErrors, [action.payload.key]: action.payload.value } };

    case RESET_ERROR:
      return { ...state, modalErrors: { ...state.modalErrors, [action.payload]: null } };

    default:
      return state;
  }
};
