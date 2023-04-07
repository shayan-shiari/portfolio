import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import ContactUs from "../../components/contactUs/ContactUs";
import Mobile from "../../components/mobile/Mobile";
import Web from "../../components/web/Web";

const Home = () => {
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
      <div>
        <svg className="animation" viewBox="0 0 1320 350">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            SobeOne Team
          </text>
        </svg>
      </div>
      <div className="app-container">
        <AboutUs />
        <ContactUs />
        <Mobile />
        <Web />
      </div>
    </div>
  );
};

export default Home;
