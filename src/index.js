import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";
import registerServiceWorker from "./utils/registerServiceWorker";
import App from "./components/App";

let store;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// add middleWares here
if (process.env.NODE_ENV === "development") {
  store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));
} else {
  store = createStore(reducers, applyMiddleware(promise));
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
if (process.env.NODE_ENV === "production") {
  registerServiceWorker();
}
