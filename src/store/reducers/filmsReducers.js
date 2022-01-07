import { ADD_FILM, GET_FILMS, TOGGLE_MODAL } from "../types";

const initialState = {
  films: [],
  loading: true,
  modal: false,
};

export const filmsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };

    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, action.payload],
      };

    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    default:
      return state;
  }
};
