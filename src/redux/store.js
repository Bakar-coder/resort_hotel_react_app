import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers";
const initialState = {};
const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
