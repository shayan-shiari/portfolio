import React from "react";
import BookPage from "./BookPage";
import HTMLFlipBook from "react-pageflip";

const MainBook = ({ children,open }) => {
  const openHandler = () => {
    open(false);
  };
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-[82%]">
          {/*content*/}
          <div className="tet-white py-7 rounded-lg shadow-lg relative w-full h-auto bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="main">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
               onClick={openHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default MainBook;
