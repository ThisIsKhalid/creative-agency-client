import React from "react";
import Branding from "./Branding/Branding";
import Faq from "./Faq/Faq";
import OurWorks from "./OurWorks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Branding />
      <Services />
      <OurWorks />
      <Faq />
    </>
  );
};

export default Home;
