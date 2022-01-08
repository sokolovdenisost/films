import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { errorsReducers } from "./reducers/errorsReducers";
import { filmsReducers } from "./reducers/filmsReducers";
import { mainReducers } from "./reducers/mainReducers";

const rootReducer = combineReducers({
  films: filmsReducers,
  main: mainReducers,
  errors: errorsReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk));
