import { combineReducers } from "redux";
import authReducer from "./authReducer";
import navbarReducer from "./navbarReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  navToggle: navbarReducer
});
export default rootReducer;
