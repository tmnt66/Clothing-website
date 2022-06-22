// import { createStore } from "redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

let middlewares = [logger];

export const store = createStore(rootReducer , applyMiddleware(...middlewares));

