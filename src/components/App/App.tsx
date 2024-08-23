import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Particle from "../Particle/Particle";
import Popup from "../Popup/Popup";
import AOS from "aos";

const App: React.FC = () => {
  AOS.init({ duration: 1000 });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (image: string) => {
    setIsOpen(true);
    setSelectedImage(image);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* <Particle /> */}
      <Header></Header>
      <Main handleImageClick={handleImageClick} />
      <Popup isOpen={isOpen} onClose={closePopup} image={selectedImage} />
    </>
  );
};

export default App;
