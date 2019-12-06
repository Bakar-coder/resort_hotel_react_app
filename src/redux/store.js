import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers";
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  initialState,
  composeEnhancer(
    applyMiddleware()
  )
);

export default store;
