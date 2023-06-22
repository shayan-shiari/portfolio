import React, { useState, useRef } from "react";
import img from "../../assets/images/mobile.jpg";
import Shared from "../shared/Shared";
import { fetchApi } from "../../services/api";
import { useEffect } from "react";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";
import dataa from "../../data.json";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const book = useRef();
  const openHandler = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    fetchApi("app/mobile").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div onClick={openHandler}>
        <Shared image={img} />
      </div>
      {isOpen && (
        <MainBook open={setIsOpen}>
          <HTMLFlipBook ref={book} width={500} height={600}>
            {dataa.map((item, index) => (
              <BookPage
                link={item.link}
                technologies={item.technologies}
                gallery={item.GalleryImages}
                image={item.medium}
                title={item.title}
                number={index + 1}
              >
                {item.description}
              </BookPage>
            ))}
          </HTMLFlipBook>
          <div className="mt-2 flex gap-x-4 max-[450px]:absolute max-[450px]:bottom-[62px] max-[450px]:left-[110px]">
            <button
              onClick={() => book.current.pageFlip().flipPrev()}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 37.826 26.11"
              >
                <path
                  d="M-1178.833-9320.346l-9.67-6.045a7,7,0,0,1,0-11.87l9.67-6.046a7,7,0,0,1,10.711,5.936v2.618h11.192a2.806,2.806,0,0,1,2.229,1.156,3.759,3.759,0,0,1,.734,2.269,3.755,3.755,0,0,1-.734,2.271,2.8,2.8,0,0,1-2.229,1.159h-11.192v2.615a7.01,7.01,0,0,1-7.017,7.013A6.931,6.931,0,0,1-1178.833-9320.346Z"
                  transform="translate(1191.793 9345.381)"
                  fill="rgba(59,130,246,1)"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => book.current.pageFlip().flipNext()}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 37.825 26.11"
              >
                <path
                  d="M12.961,25.035,3.29,18.992a7,7,0,0,1,0-11.872l9.671-6.044a7,7,0,0,1,10.71,5.936V9.629H34.861a2.806,2.806,0,0,1,2.229,1.157,3.875,3.875,0,0,1,0,4.54,2.806,2.806,0,0,1-2.229,1.157H23.671V19.1a7.008,7.008,0,0,1-7.015,7.011A6.929,6.929,0,0,1,12.961,25.035Z"
                  transform="translate(37.825 26.111) rotate(180)"
                  fill="rgba(59,130,246,1)"
                ></path>
              </svg>
            </button>
          </div>
        </MainBook>
      )}
    </>
  );
};

export default Mobile;
