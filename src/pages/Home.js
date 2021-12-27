import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>Acceuil</h1>
      <Countries />
    </div>
  );
};

export default Home;
