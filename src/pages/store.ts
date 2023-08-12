import { createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "~/pages/reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

function configureAppStore(preloadedState?: any) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhnacers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhnacers);

  const store = createStore(rootReducers, preloadedState, composedEnhancers);

  return store;
}

const store = configureAppStore({});

export default store;

sagaMiddleware.run(sagas);
