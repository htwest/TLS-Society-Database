import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

import App from "./App";

const tlsStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={tlsStore}>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
