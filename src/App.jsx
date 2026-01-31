import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import './App.css';
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";
import Empty from "./components/Empty.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);  // Added dependency array

  return (
    <div className="app" style={{ backgroundColor: '#1A1C2B', color: 'white' }}>
      <Navbar />
      <About />
      <Projects />
      <Empty />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;