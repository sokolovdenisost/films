import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { filmsReducers } from "./reducers/filmsReducers";

const rootReducer = combineReducers({
  films: filmsReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk));
