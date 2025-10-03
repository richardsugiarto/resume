import logo from './logo.svg';
import './App.css';
import Mynavbar from './components/Mynavbar';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Publication from './pages/Publication';


function App() {
  return (
    <div className="App">
      <div className='back'></div>
      <Mynavbar />
      <div>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Experience">
          <Resume />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Publication">
          <Publication />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
