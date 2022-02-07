import { takeEvery, put, call } from "redux-saga/effects";
import { JSON_API } from "../../consts";
import { HIDE_LOADER, REQUEST_GET_FILM, REQUEST_GET_FILMS, SHOW_LOADER, SUCCESS_GET_FILM, SUCCESS_GET_FILMS } from "../types";

export function* watchGetFilms() {
  yield takeEvery(REQUEST_GET_FILMS, asyncGetFilms);
  yield takeEvery(REQUEST_GET_FILM, asyncGetFilm);
}

// GET FILM
function* asyncGetFilm(action) {
  try {
    const { id } = action.payload;
    yield put({ type: SHOW_LOADER });
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
