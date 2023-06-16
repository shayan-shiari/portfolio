import React, { useEffect } from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import ContactUs from "../../components/contactUs/ContactUs";
import Mobile from "../../components/mobile/Mobile";
import Web from "../../components/web/Web";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="all-book">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div>
        <svg className="animation" viewBox="0 0 1320 350">
          <text
            className="heading-text"
            x="50%"
            y="50%"
            dy=".35em"
            text-anchor="middle"
          >
            SubOne Team
          </text>
        </svg>
      </div>
      <div
        data-aos-duration="3000"
        data-aos="zoom-out"
        className="grid h-[70vh] grid-cols-4 g-red-300 content-center max-[1000px]:grid-cols-2 max-[1000px]:gap-y-16"
      >
        <AboutUs />
        <ContactUs />
        <Mobile />
        <Web />
      </div>
    </div>
  );
};

export default Home;
