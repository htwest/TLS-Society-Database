import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import pendingReducer from "./pending";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  pending: pendingReducer,
});

export default allReducers;
