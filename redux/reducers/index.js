import { combineReducers } from "redux";
import counterReducer from "./defaultReducer";

const rootReducer = combineReducers({
  // your reducer slices will be added here
  counterReducer,
});

export default rootReducer;
