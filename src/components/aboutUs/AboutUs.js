import React, { useState } from "react";
import img from "../../assets/images/about us.jpg";
import Shared from "../shared/Shared";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      <div onClick={openHandler}>
        <Shared image={img} />
      </div>
      {isOpen && (
        <MainBook open={setIsOpen}>
          <HTMLFlipBook width={500} height={600}>
            <BookPage number={1}>df</BookPage>
            <BookPage number={2}>Lorem ipsum...</BookPage>
            <BookPage number={2}>Lorem ipsum...</BookPage>
            <BookPage number={2}>Lorem ipsum...</BookPage>
          </HTMLFlipBook>
        </MainBook>
      )}
    </>
  );
};

export default AboutUs;
