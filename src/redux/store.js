import { createStore, applyMiddleware } from "redux";

import RootReducer from "./root-reducer";
import logger from "redux-logger";

const store = createStore(RootReducer, applyMiddleware(logger));

export default store