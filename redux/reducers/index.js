import { combineReducers } from "redux";
import defaultReducer from "./defaultReducer";

const rootReducer = combineReducers({
  // your reducer slices will be added here
  default: defaultReducer,
});

export default rootReducer;
