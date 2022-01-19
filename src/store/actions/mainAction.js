import { TOGGLE_ADD_MODAL, TOGGLE_CHECK_MODAL, TOGGLE_EDIT_MODAL } from "../types";

export const toggleAddModal = (active) => async (dispatch) => {
  dispatch({
    type: TOGGLE_ADD_MODAL,
    payload: active,
  });
};

export const toggleCheckModal =
  (active, film = null) =>
  async (dispatch) => {
    if (film === null) {
      film = { name: "", year: "", country: "", genre: "", director: "", budget: "", img: "", trailer: "", description: "" };
    }

    dispatch({
      type: TOGGLE_CHECK_MODAL,
      payload: { active, film },
    });
  };

export const toggleEditModal =
  (active, film = null) =>
  async (dispatch) => {
    if (film === null) {
      film = { name: "", year: "", country: "", genre: "", director: "", budget: "", img: "", trailer: "", description: "" };
    }

    dispatch({
      type: TOGGLE_EDIT_MODAL,
      payload: { active, film },
    });
  };
