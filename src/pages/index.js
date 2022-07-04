import React, { useState } from "react";
import Sidebar from "../comps/Sidebar";
import Navbar from "../comps/Navbar";
import Hero from "../comps/HeroSection";
import InfoSection from "../comps/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../comps/InfoSection/Data";
import Services from "../comps/Services";
import Footer from "../comps/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
