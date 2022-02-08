import { all } from "redux-saga/effects";
import { watchFilms } from "./films";

export default function* rootSaga() {
  yield all([watchFilms()]);
}
