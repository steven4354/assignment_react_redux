import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

//-----------------------
//react-redux store items
//-----------------------

import {Provider} from "react-redux";
import {createStore} from "redux";

import {showAvailable, showNotAvailable, showAll} from "./actions";

//for logging the store
import {applyMiddleware} from "redux";
import logger from "redux-logger";

// Import our reducer to use when we create the store
import {itemsApp} from "./reducers.js";

// Mocked server/API response aka initial states for some of the reducers
const itemsFromServer = [
  {
    id: 1,
    name: "tangerines",
    category: "fruits",
    description: "orange fruit",
    available: true
  },
  {
    id: 2,
    name: "apples",
    category: "fruits",
    description: "red fruit",
    available: false
  }
];

//creating the store
let store = createStore(
  itemsApp,
  {
    // puppies: puppiesFromServer,
    items: itemsFromServer
  },
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(showAvailable(store.getState().items));

console.log("Show Available", store.getState());

store.dispatch(showNotAvailable(store.getState().items));

console.log("ShowNotAvailable", store.getState());

store.dispatch(showAll(store.getState().items));

console.log("Show All", store.getState());

registerServiceWorker();
