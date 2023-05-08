import React, { useState } from "react";
import img from "../../assets/images/mobile.jpg";
import Shared from "../shared/Shared";
import { fetchApi } from "../../services/api";
import { useEffect } from "react";
import BookPage from "../../core-ui/BookPage";
import HTMLFlipBook from "react-pageflip";
import MainBook from "../../core-ui/MainBook";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
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
          <HTMLFlipBook width={500} height={600}>
            {data.map((item, index) => (
              <BookPage
                link={item.attributes.link}
                technologies={item.attributes.technologies}
                gallery={item.galleries.GalleryImages}
                image={item.attributes.image.indexArray.medium}
                title={item.attributes.title}
                number={index + 1}
              >
                {item.attributes.description}
              </BookPage>
            ))}
          </HTMLFlipBook>
        </MainBook>
      )}
    </>
  );
};

export default Mobile;
