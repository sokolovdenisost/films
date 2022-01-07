import { JSON_API } from "../../consts";
import { ADD_FILM, GET_FILMS, TOGGLE_MODAL } from "../types";

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
    .then((res) => {
      dispatch({
        type: ADD_FILM,
        payload: res,
      });
      toggleModal();
    })
    .catch((err) => alert("Ошибка"));
};

export const toggleModal = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: null,
  });
};
