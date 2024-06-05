import React from "react";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default Home;
