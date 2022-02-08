import { FILTERED_FILMS, REQUEST_ADD_FILM, REQUEST_DELETE_FILM, REQUEST_EDIT_FILM, REQUEST_GET_FILM, REQUEST_GET_FILMS } from "../types";

export const getFilms = () => {
  return { type: REQUEST_GET_FILMS };
};

export const getFilmById = (id) => {
  return { type: REQUEST_GET_FILM, payload: { id } };
};

export const addFilm = (film) => {
  return { type: REQUEST_ADD_FILM, payload: { film } };
};

export const deleteFilm = (id) => {
  return { type: REQUEST_DELETE_FILM, payload: { id } };
};

export const editFilm = (id, form) => {
  return { type: REQUEST_EDIT_FILM, payload: { id, form } };
};

export const filteredFilmsByName = (filter) => {
  return {
    type: FILTERED_FILMS,
    payload: filter.toLowerCase(),
  };
};
