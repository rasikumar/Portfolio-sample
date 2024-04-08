// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Mywork from "./components/mywork/Mywork";
import Contact from "./components/contact/Contact";
import Services from "./components/service/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
    </div>
  );
};

export default App;
