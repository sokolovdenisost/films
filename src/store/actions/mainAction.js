import { TOGGLE_ADD_MODAL } from "../types";

export const toggleAddModal = () => async (dispatch) => {
  console.log("close modal");
  dispatch({
    type: TOGGLE_ADD_MODAL,
    payload: null,
  });
};
