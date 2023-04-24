import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./reactApp.js";

function App() {
  return (
    <div>
      container works
      <ReactApp />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
