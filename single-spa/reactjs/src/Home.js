import React, { useEffect } from "react";

async function clickHandler() {
  const toolsModule = await System.import("@study/tools");
  toolsModule.publicApiFunction("reactjs");
}

const Home = () => {
  useEffect(async () => {
    const toolsModule = await System.import("@study/tools");
    let subjection = toolsModule.sharedSubject.subscribe(console.log);
    return () => subjection.unsubscribe();
  }, []);
  return (
    <>
      <div>Home</div>
      <button onClick={clickHandler}>click me</button>
      <button
        onClick={async () =>
          (await System.import("@study/tools")).sharedSubject.next(
            "hello hello"
          )
        }
      >
        Rxjs发送跨应用消息
      </button>
    </>
  );
};

export default Home;
