import Footer from './components/Footer';
import './App.css';
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let frameId;

    const animate = () => {
      setOpacity(opacity + 0.01);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [opacity]);

  return (
    <div className="App" style={{ opacity }}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

