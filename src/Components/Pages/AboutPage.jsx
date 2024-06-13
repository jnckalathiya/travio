import React from "react";
import PagesBanner from "../PagesBanner";
import About from "../About";
import Destinations from "../Destinations";
import Video from "../Video";
import ToureGuide from "../Tour/ToureGuide";

const AboutPage = () => {
  return (
    <>
      <PagesBanner title="About Us" />
      <About />
      <Video />
      <Destinations />
      <ToureGuide />
    </>
  );
};

export default AboutPage;
