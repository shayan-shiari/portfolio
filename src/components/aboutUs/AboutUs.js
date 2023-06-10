import React, { useState } from "react";
import img from "../../assets/images/about us.jpg";
import Shared from "../shared/Shared";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";
import gif from "../../assets/images/about.gif";
import gif2 from "../../assets/images/about2.gif";

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
            <BookPage aboutImage={gif} number={1}>
              <p className="text-[16px] text-gray-600 heading-text">
                We are a creative programming team. we help people to have good
                looking website and app with amazing technologies.{" "}
              </p>
              <p className="text-[16px] text-blue-600">Our skills:</p>
              <div className="w-[70%] flex flex-col gap-y-1">
                <div>
                  <h4 className="font-medium">HTML</h4>
                  <div class="bg-blue-600 flex w-[100%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    100%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">CSS</h4>
                  <div class="bg-blue-600 flex w-[95%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    95%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">TAILWIND</h4>
                  <div class="bg-blue-600 flex w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    90%
                  </div>
                </div>
              </div>
            </BookPage>
            <BookPage number={2}>
              <div className="w-[70%] flex flex-col gap-y-1">
                <div>
                  <h4 className="font-medium">BOOTSTRAP</h4>
                  <div class="bg-blue-600 flex w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    90%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">JAVASCRIPT</h4>
                  <div class="bg-blue-600 flex w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    80%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">PHP</h4>
                  <div class="bg-blue-600 flex w-[75%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    75%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">MySQL</h4>
                  <div class="bg-blue-600 flex w-[85%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    85%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">FLUTTER</h4>
                  <div class="bg-blue-600 flex w-[65%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    65%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">REACT.JS</h4>
                  <div class="bg-blue-600 flex w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    90%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">NEXT.JS</h4>
                  <div class="bg-blue-600 flex w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    80%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">LARAVEL</h4>
                  <div class="bg-blue-600 flex w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    90%
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">WORDPRESS</h4>
                  <div class="bg-blue-600 flex w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                    70%
                  </div>
                </div>
              </div>
            </BookPage>
          </HTMLFlipBook>
        </MainBook>
      )}
    </>
  );
};
// @ShayanShiari_202320246564367
export default AboutUs;
