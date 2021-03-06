import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import reduxReset from "redux-reset";

import reducer from "./../_reducers";

// const middleware = applyMiddleware(promiseMiddleware(), thunk);
const middleware = applyMiddleware(promiseMiddleware(), thunk, logger);

export default createStore(reducer, middleware, reduxReset());
