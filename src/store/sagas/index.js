import { all } from "redux-saga/effects";
import { watchGetFilms } from "./films";

export default function* rootSaga() {
  yield all([watchGetFilms()]);
}
