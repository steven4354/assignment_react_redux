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

import { Provider } from "react-redux";
import { createStore } from "redux";

// Import our reducer to use when we create the store
import { itemsApp } from "./reducers.js";

// Mocked server/API response aka initial states for some of the reducers
const itemsFromServer = [
  {
    id: 1,
    name: "tangerines",
    category: "fruits",
    description: "orange fruit",
    available: true
  }
];

//creating the store
let store = createStore(itemsApp, {
  // puppies: puppiesFromServer,
  items: itemsFromServer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
