import React from "react";
import "./Main.scss";
// import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";


const Main: React.FC = () => {
  return (
    <main>
      {/* <Intro /> */}
      <Projects />
      <Skills />
      <Education />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Main;
