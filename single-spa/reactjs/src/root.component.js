import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Parcel from 'single-spa-react/parcel'
import Home from './Home.js'
import About from './About.js'

export default function Root(props) {
  return (
    <BrowserRouter basename="/reactjs">
      <Parcel config={System.import("@study/navbar")}/>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
