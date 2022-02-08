import { takeEvery, put, call } from "redux-saga/effects";
import { JSON_API } from "../../consts";
import {
  HIDE_LOADER,
  REQUEST_ADD_FILM,
  REQUEST_DELETE_FILM,
  REQUEST_EDIT_FILM,
  REQUEST_GET_FILM,
  REQUEST_GET_FILMS,
  SHOW_LOADER,
  SUCCESS_ADD_FILM,
  SUCCESS_DELETE_FILM,
  SUCCESS_EDIT_FILM,
  SUCCESS_GET_FILM,
  SUCCESS_GET_FILMS,
} from "../types";

export function* watchFilms() {
  yield takeEvery(REQUEST_GET_FILMS, asyncGetFilms);
  yield takeEvery(REQUEST_GET_FILM, asyncGetFilm);
  yield takeEvery(REQUEST_ADD_FILM, asyncAddFilm);
  yield takeEvery(REQUEST_DELETE_FILM, asyncDeleteFilm);
  yield takeEvery(REQUEST_EDIT_FILM, asyncEditFilm);
}

// EDIT FILM
function* asyncEditFilm(action) {
  try {
    const { id, form } = action.payload;
    const payload = yield call(editFilm, id, form);
    yield put({ type: SUCCESS_EDIT_FILM, payload });
  } catch (e) {
    alert("Ошибка. Попробуйте позже");
  }
}

async function editFilm(id, form) {
  const response = await fetch(`${JSON_API}/films/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

// DELETE FILM
function* asyncDeleteFilm(action) {
  try {
    const { id } = action.payload;
    yield call(deleteFilm, id);
    yield put({ type: SUCCESS_DELETE_FILM, payload: id });
  } catch (e) {
    alert("Ошибка. Попробуйте позже");
  }
}

async function deleteFilm(id) {
  const response = await fetch(`${JSON_API}/films/${id}`, { method: "DELETE" });
  return await response.json();
}

// ADD FILM
function* asyncAddFilm(action) {
  try {
    const { film } = action.payload;
    const payload = yield call(addFilm, film);
    yield put({ type: SUCCESS_ADD_FILM, payload });
  } catch (e) {
    alert("Ошибка. Попробуйте позже");
  }
}

async function addFilm(film) {
  const response = await fetch(`${JSON_API}/films`, {
    method: "POST",
    body: JSON.stringify(film),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

// GET FILM
function* asyncGetFilm(action) {
  try {
    yield put({ type: SHOW_LOADER });
    const { id } = action.payload;
    const payload = yield call(getFilm, id);
    yield put({ type: SUCCESS_GET_FILM, payload });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: HIDE_LOADER });
  }
}

async function getFilm(id) {
  const response = await fetch(`${JSON_API}/films/${id}`);
  return await response.json();
}

// GET FILMS
function* asyncGetFilms() {
  try {
    yield put({ type: SHOW_LOADER });
    const payload = yield call(getFilms);
    yield put({ type: SUCCESS_GET_FILMS, payload });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield put({ type: HIDE_LOADER });
  }
}

async function getFilms() {
  const response = await fetch(`${JSON_API}/films`);
  return await response.json();
}
