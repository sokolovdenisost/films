import { TOGGLE_ADD_MODAL } from "../types";

export const toggleAddModal = (active) => async (dispatch) => {
  dispatch({
    type: TOGGLE_ADD_MODAL,
    payload: active,
  });
};
