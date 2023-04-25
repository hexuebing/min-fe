import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import { createMemoryHistory } from "history";

// 从这里传入的 history却不能用，不知道原因
function mount(el) {
  const history = createMemoryHistory();
  ReactDOM.render(<App history={history} />, el);
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#react-app");
  if (el) mount(el);
}

export { mount };
