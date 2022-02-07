import { JSON_API } from "../../consts";
import { ADD_FILM, DELETE_FILM, EDIT_FILM, FILTERED_FILMS, REQUEST_GET_FILM, REQUEST_GET_FILMS } from "../types";
import { toggleAddModal } from "./mainAction";

export const getFilms = () => {
  return {
    type: REQUEST_GET_FILMS,
  };
};

export const getFilmById = (id) => {
  return { type: REQUEST_GET_FILM, payload: { id } };
};

export const addFilm = (film) => async (dispatch) => {
  await fetch(`${JSON_API}/films`, {
    method: "POST",
    body: JSON.stringify(film),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => alert("Ошибка. Сообщение не дошло до сервера!"))
    .then((res) => {
      if (res) {
        dispatch({
          type: ADD_FILM,
          payload: res,
        });

        toggleAddModal();
      }
    });
};

export const deleteFilm = (id) => async (dispatch) => {
  await fetch(`${JSON_API}/films/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => alert("Ошибка. Сообщение не дошло до сервера!"))
    .then((res) => {
      if (res) {
        dispatch({
          type: DELETE_FILM,
          payload: id,
        });
      }
    });
};

export const editFilm = (id, form) => async (dispatch) => {
  await fetch(`${JSON_API}/films/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => alert("Ошибка. Сообщение не дошло до сервера!"))
    .then((res) => {
      if (res) {
        dispatch({
          type: EDIT_FILM,
          payload: res,
        });
      }
    });
};

export const filteredFilmsByName = (filter) => async (dispatch) => {
  dispatch({
    type: FILTERED_FILMS,
    payload: filter.toLowerCase(),
  });
};
