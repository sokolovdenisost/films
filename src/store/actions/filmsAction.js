import { useSelector } from "react-redux";
import { JSON_API } from "../../consts";
import { ADD_FILM, DELETE_FILM, EDIT_FILM, GET_FILMS } from "../types";
import { toggleAddModal } from "./mainAction";

export const getFilms = () => async (dispatch) => {
  await fetch(`${JSON_API}/films`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_FILMS,
        payload: res,
      });
    });
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
