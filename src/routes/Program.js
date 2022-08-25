import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import ProgramSection from "../components/Program";

const Program = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="OUR PROGRAM."
        text="Intense Meditation & Relentless Visualization."
      />
<ProgramSection/>
      <Footer />
    </div>
  );
};

export default Program;
