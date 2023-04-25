import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import { createMemoryHistory, createBrowserHistory } from "history";

// 从这里传入的 history却不能用，需要接收的是通过解构来接收
function mount(el, { changeContainerPath, defaultHistory }) {
  // 测试环境使用BrowserHistory
  const history = defaultHistory || createMemoryHistory();
  if (changeContainerPath) history.listen(changeContainerPath);
  ReactDOM.render(<App history={history} />, el);
  return {
    changeReactAppPath({ pathname }) {
      if (pathname !== history.location) {
        history.push(pathname);
      }
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#react-app");
  const defaultHistory = createBrowserHistory();
  if (el) mount(el, { defaultHistory });
}

export { mount };
