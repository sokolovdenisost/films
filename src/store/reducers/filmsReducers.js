import {
  ADD_FILM,
  DELETE_FILM,
  EDIT_FILM,
  FILTERED_FILMS,
  GET_FILM,
  HIDE_LOADER,
  SHOW_LOADER,
  SUCCESS_GET_FILMS,
  SUCCESS_GET_FILM,
} from "../types";

const initialState = {
  films: [],
  filteredFilms: [],
  film: {},
  loading: true,
};

export const filmsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, action.payload],
      };

    case SUCCESS_GET_FILM:
      return { ...state, film: action.payload };

    case DELETE_FILM:
      return { ...state, films: state.films.filter((film) => film.id !== action.payload) };

    case EDIT_FILM:
      return {
        ...state,
        films: state.films.map((film) => (film.id === action.payload.id ? action.payload : film)),
      };

    case FILTERED_FILMS:
      return { ...state, filteredFilms: state.films.filter((film) => film.name.toLowerCase().includes(action.payload.toLowerCase())) };

    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    default:
      return state;
  }
};
