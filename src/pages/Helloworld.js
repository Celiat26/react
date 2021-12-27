import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Helloworld = () => {
  const [data, setData] = useState("Hello");
  const sayHelloWorld = () => {
    setData("Hello World");
  };
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>{data}</h1>
      <button onClick={sayHelloWorld}>Dire bonjour au monde</button>
    </div>
  );
};

export default Helloworld;
