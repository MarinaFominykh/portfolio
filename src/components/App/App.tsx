import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Particle from '../Particle/Particle';



const App: React.FC = () => {
  return (
    <>
    {/* <Particle /> */}
      <Header></Header>
      <main>
        <Intro />
        <Projects />
        <Skills />
        <Education />
        <Contacts />
        <Footer />
      </main>

    </>


  );
}

export default App;
