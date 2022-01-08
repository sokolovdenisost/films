import { JSON_API } from "../../consts";
import { ADD_FILM, GET_FILMS } from "../types";
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
      console.log("res1", res);

      if (res) {
        console.log("res2", res);
        dispatch({
          type: ADD_FILM,
          payload: res,
        });

        toggleAddModal();
      }
    });
};
