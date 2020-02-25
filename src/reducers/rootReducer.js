import { combineReducers } from "redux";
import rotateReducer from "./rotateReducer";

const rootReducer = combineReducers({
  rotateReducer: rotateReducer
});

export default rootReducer;
