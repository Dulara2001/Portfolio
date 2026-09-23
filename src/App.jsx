import React from "react";
import NeuralBackground from "./components/NeuralBackground";
import ScrollProgress from "./components/ScrollProgress";
import ScrollHUD from "./components/ScrollHUD";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";

const App = () => {
    return (
      <div className="overflow-x-hidden text-neutral-300 antialiased
        selection:bg-cyan-300 selection:text-cyan-900">
        <NeuralBackground />
        <ScrollProgress />
        <ScrollHUD />
        <BackToTop />

        <div className="container mx-auto px-8 min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Research />
          <Projects />
          <Certificate />
          <Contact />
        </div>
      </div>
    );
  };

export default App