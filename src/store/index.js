import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootWatcher from "./sagas";
import { errorsReducers } from "./reducers/errorsReducers";
import { filmsReducers } from "./reducers/filmsReducers";
import { mainReducers } from "./reducers/mainReducers";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  films: filmsReducers,
  main: mainReducers,
  errors: errorsReducers,
});

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
