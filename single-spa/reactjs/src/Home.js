import React from "react";

async function clickHandler() {
  const toolsModule = await System.import("@study/tools");
  toolsModule.publicApiFunction("reactjs");
}

const Home = () => {
  return (
    <>
      <div>Home</div>
      <button onClick={clickHandler}>click me</button>
    </>
  );
};

export default Home;
