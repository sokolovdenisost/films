import { toggleScrollbar } from "../../utils/scrollbar";
import { TOGGLE_ADD_MODAL, TOGGLE_CHECK_MODAL, TOGGLE_EDIT_MODAL } from "../types";

export const toggleAddModal = (active) => {
  toggleScrollbar(false);

  return {
    type: TOGGLE_ADD_MODAL,
    payload: active,
  };
};

export const toggleCheckModal = (active, film = null) => {
  if (film === null) {
    toggleScrollbar(false);
    film = { name: "", year: "", country: "", genre: "", director: "", budget: "", img: "", trailer: "", description: "" };
  }

  return {
    type: TOGGLE_CHECK_MODAL,
    payload: { active, film },
  };
};

export const toggleEditModal = (active, film = null) => {
  if (film === null) {
    toggleScrollbar(false);
    film = { name: "", year: "", country: "", genre: "", director: "", budget: "", img: "", trailer: "", description: "" };
  }

  return {
    type: TOGGLE_EDIT_MODAL,
    payload: { active, film },
  };
};
