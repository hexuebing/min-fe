import React from "react";
import { BrowserRouter, Link } from "react-router-dom"

export default function Root(props) {
  return <BrowserRouter>
    <Link to="/">welcome</Link> {" "}
    <Link to="/demojs">demojs</Link> {" "}
    <Link to="/reactjs">reactjs</Link> {" "}
    <Link to="/vuejs">vuejs</Link>
  </BrowserRouter>
}
