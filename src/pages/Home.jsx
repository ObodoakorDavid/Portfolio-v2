import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="text-5xl text-gray-500 px-4">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
