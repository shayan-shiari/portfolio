import React, { useState } from "react";

const BookPage = React.forwardRef((props, ref) => {
  const [imageModal, setImageModal] = useState();
  console.log(imageModal);
  const main_url = "https://subone.iran.liara.run";
  console.log(props);

  return (
    <div>
      <div className={`${props.number % 2 === 0 ? "right" : "left"}`} ref={ref}>
        {imageModal ? (
          <div className="flex items-center flex-col w-[100%] bg-[rgba(0,0,0,0.5)] fixed top-[0] left-[0] h-full text-white">
            <div
              className="cursor-pointer"
              onMouseDownCapture={(e) => {
                e.stopPropagation();
                setImageModal(false);
              }}
            >
              <ion-icon name="close-outline" size="large"></ion-icon>
            </div>
            <img
              src={`${main_url}/${imageModal}`}
              alt="modal for image"
              className="w-[98%] h-[75%] mt-12 rounded-xl"
            />
          </div>
        ) : (
          <h1></h1>
        )}
        <div className="w-full h-full flex flex-col justify-between items-stretch">
          <h2 className="h-[30px] text-gray-700 text-center mb-[6px] uppercase font-bold">
            {props.title}
          </h2>
          {props.gallery && (
            <div className="h-full bg-contain bg-center bg-no-repeat">
              <div className="flex justify-center mb-2">
                <img
                  onMouseDownCapture={(e) => {
                    e.stopPropagation();
                    setImageModal(props.image);
                  }}
                  className="w-[60%] h-[130px] rounded shadow-xl cursor-pointer"
                  src={`${main_url}/${props.image}`}
                  alt="main"
                />
              </div>
              <div className="">
                {props.gallery?.map((item, index) => (
                  <div
                    className={
                      index % 2 === 0
                        ? "flex justify-start my-1"
                        : "flex justify-end"
                    }
                  >
                    <img
                      onMouseDownCapture={(e) => {
                        e.stopPropagation();
                        setImageModal(item.image);
                      }}
                      key={item.image}
                      className="w-[50%] h-[113px] rounded shadow-xl cursor-pointer mr-5"
                      src={`${main_url}/${item.image}`}
                      alt="sub"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {props.aboutImage && (
            <div className="bg-contain bg-center bg-no-repeat">
              <div className="flex justify-center">
                <img
                  className="w-[65%] rounded shadow-md"
                  src={`${props.aboutImage}`}
                  alt="about-us"
                />
              </div>
            </div>
          )}

          <div className="h-[35%] flex-grow-[1] flex flex-col gap-y-[15px] text-justify mt-[10px] box-border text-[12px]">
            {props.technologies || props.link ? (
              <>
                <hr className="w-52 h-[2px]  mx-auto bg-gray-400 border-0 rounded" />
                <div>
                  <p className="inline text-white font-bold bg-blue-500 p-1 rounded-lg mr-1">
                    Description:
                  </p>
                  {props.children}
                </div>
                <div>
                  <p className="inline text-white font-bold bg-blue-500 p-1 rounded-lg mr-1">
                    Technologies:
                  </p>
                  {props.technologies}
                </div>
                {/* <div>
                  <p className="inline text-white font-bold bg-blue-500 p-1 rounded-lg mr-1">
                    Link:
                  </p>
                  {props.link}
                </div> */}
              </>
            ) : (
              <>{props.children}</>
            )}
          </div>
          <div className="h-[30px] text-stone-700 text-[13px] heading-text font-bold">
            {props.number}
          </div>
        </div>
      </div>
    </div>
  );
});

export default BookPage;
