import { ADD_FILM, DELETE_FILM, EDIT_FILM, FILTERED_FILMS, GET_FILMS } from "../types";

const initialState = {
  films: [],
  filteredFilms: [],
  loading: true,
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

    case DELETE_FILM:
      return { ...state, films: state.films.filter((film) => film.id !== action.payload) };

    case EDIT_FILM:
      return {
        ...state,
        films: state.films.map((film) => (film.id === action.payload.id ? action.payload : film)),
      };

    case FILTERED_FILMS:
      return { ...state, filteredFilms: state.films.filter((film) => film.name.toLowerCase().includes(action.payload.toLowerCase())) };

    default:
      return state;
  }
};
