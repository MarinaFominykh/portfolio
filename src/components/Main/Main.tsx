import React from "react";
import "./Main.scss";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

interface MainProps {
  handleImageClick: (image: string) => void;
}
const Main: React.FC<MainProps> = ({ handleImageClick }) => {
  return (
    <main>
      {/* <Intro /> */}
      <Projects />
      <Skills />
      <Education handleImageClick={handleImageClick} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Main;
