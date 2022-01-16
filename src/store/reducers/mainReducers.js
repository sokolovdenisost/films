import { RELOAD_MAIN_STATE, TOGGLE_ADD_MODAL, TOGGLE_CHECK_MODAL, TOGGLE_EDIT_MODAL } from "../types";

const initialState = {
  addFilmModal: false,
  checkFilmModal: false,
  editFilmModal: false,
  scrollbar: true,
  selectedFilm: {
    name: "",
    year: "",
    country: "",
    genre: "",
    director: "",
    budget: "",
    img: "",
    trailer: "",
    description: "",
  },
};

export const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return {
        ...state,
        addFilmModal: action.payload,
      };

    case TOGGLE_CHECK_MODAL:
      return { ...state, checkFilmModal: action.payload.active, selectedFilm: action.payload.film };

    case TOGGLE_EDIT_MODAL:
      return { ...state, editFilmModal: action.payload.active, selectedFilm: action.payload.film };

    case RELOAD_MAIN_STATE:
      return { ...state };

    default:
      return state;
  }
};
