import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { leaders } from "./leaders";
import { dishes } from "./dishes";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { favorites } from "./favorites";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ leaders, dishes, comments, promotions, favorites }),
    // composeEnhancers,
    // logger,
    applyMiddleware(thunk)
  );
  return store;
};
