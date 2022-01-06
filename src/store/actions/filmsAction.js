import { JSON_API } from "../../const";
import { ADD_FILM, GET_FILMS } from "../types";

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
    })
    .catch((err) => alert("Ошибка"));
};
