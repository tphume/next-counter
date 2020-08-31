import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { asyncCounterReducer } from "./asyncCounter";

export default combineReducers({
  counter: counterReducer,
  asyncCounter: asyncCounterReducer
});
