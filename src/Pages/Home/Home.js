import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import InfoCards from "./InfoCards";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <About />
      <MakeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
