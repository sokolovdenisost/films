import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { errorsReducers } from "./reducers/errorsReducers";
import { filmsReducers } from "./reducers/filmsReducers";

const rootReducer = combineReducers({
  films: filmsReducers,
  errors: errorsReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk));
