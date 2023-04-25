import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";

// import { createMemoryHistory } from "history";

function App({ history }) {
  return (
    <Router history={history}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
