import React, { useEffect, useRef } from "react";
import { mount } from "reactApp/reactApp";

export default function ReactApp() {
  const ref = useRef();
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
}
