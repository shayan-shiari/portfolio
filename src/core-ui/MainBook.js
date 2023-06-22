import React from "react";

const MainBook = ({ children, open }) => {
  const openHandler = () => {
    open(false);
  };
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-[1050px] max-[1000px]:w-[560px] max-[450px]:w-[300px]">
          {/*content*/}
          <div className="tet-white py-2 rounded-lg shadow-lg relative w-full h-auto max-[1000px]:bg-transparent bg-[#e9e3e3] outline-none focus:outline-none">
            {/*body*/}
            <div className="flex items-center justify-center relative flex-col">
              {children}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b px-5 max-[450px]:absolute max-[450px]:bottom-[100px] max-[450px]:left-[230px]">
              <button
                className="bg-red-500 text-white rounded-lg background-transparent font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={openHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-20 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
};

export default MainBook;
