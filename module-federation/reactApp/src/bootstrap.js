import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

function mount(el) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#react-app");
  if (el) mount(el);
}

export { mount };
