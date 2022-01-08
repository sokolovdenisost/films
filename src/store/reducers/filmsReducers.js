import { ADD_FILM, GET_FILMS } from "../types";

const initialState = {
  films: [],
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

    default:
      return state;
  }
};
