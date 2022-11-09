import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";

import App from "./App";
import { store } from "./shared/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
