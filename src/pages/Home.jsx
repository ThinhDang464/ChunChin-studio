import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Hero2 from "../components/Hero2";
import InfoBlock from "../components/InfoBlock";
import PinnedScroll from "../components/PinnedScroll";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Hero2 />
      <InfoBlock />
      <PinnedScroll />
    </div>
  );
};

export default Home;
