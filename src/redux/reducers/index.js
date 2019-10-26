import { combineReducers } from "redux";
import roomsState from "./roomsReducer";
const RootReducer = combineReducers({
  roomsState
});

export default RootReducer;
