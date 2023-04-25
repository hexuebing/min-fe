import React, { useEffect, useRef } from "react";
import { mount } from "reactApp/reactApp";
import { useHistory } from "react-router-dom";

export default function ReactApp() {
  const ref = useRef();
  const history = useHistory();
  useEffect(() => {
    const { changeReactAppPath } = mount(ref.current, {
      changeContainerPath({ pathname: nextPathname }) {
        const { pathname } = history.location;
        if (nextPathname !== pathname) {
          history.push(nextPathname);
        }
      },
    });
    if (changeReactAppPath) history.listen(changeReactAppPath);
  }, []);
  return <div ref={ref}></div>;
}
