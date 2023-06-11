import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Particle from "../Particle/Particle";



const App: React.FC = () => {
  return (
    <>
    <Particle/>
      <Header></Header>
      <Main />
    </>
  );
};

export default App;
