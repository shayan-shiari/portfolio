import React from "react";

const MainBook = ({ children, open }) => {
  const openHandler = () => {
    open(false);
  };
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.6)]  justify-center items-center flex flex-col fixed top-[-200px] right-0 left-0  h-screen inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-[1050px] max-[1000px]:w-[560px] max-[450px]:w-[300px]">
          {/*content*/}
          <div className="pb-5 rounded-lg shadow-lg relative w-full h-auto max-[1000px]:bg-transparent bg-[#e9e3e3] outline-none focus:outline-none">
            {/*body*/}
            <div className="flex justify-end w-[100%] max-[450px]:w-[110%] p-1">
              <svg
                onClick={openHandler}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea0707"
                stroke-width="3"
                stroke-linecap="square"
                stroke-linejoin="arcs"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <div className="flex items-center justify-center relative flex-col">
              {children}
            </div>
            {/*footer*/}
            {/* <div className="flex items-center justify-end rounded-b px-5 max-[450px]:absolute max-[450px]:bottom-[100px] max-[450px]:left-[230px]">
              <button
                className="bg-red-500 text-white rounded-lg background-transparent font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={openHandler}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBook;

// import React from "react";

// const MainBook = ({ children, open }) => {
//   const openHandler = () => {
//     open(false);
//   };
//   return (
//     <>
//       <div className="bg-[rgba(0,0,0,0.6)]  justify-center items-center flex fixed top-[-200px] right-0 left-0  h-screen inset-0 z-50 outline-none focus:outline-none">
//         <div className="relative mx-auto w-[1050px] max-[1000px]:w-[560px] max-[450px]:w-[300px]">
//           <div className="tet-white py-2 rounded-lg shadow-lg relative w-full h-auto max-[1000px]:bg-transparent bg-[#e9e3e3] outline-none focus:outline-none">
//             {/*body*/}
//             <div className="flex items-center justify-center relative flex-col">
//               {children}
//             </div>
//             <div className="flex items-center justify-end rounded-b px-5 max-[450px]:absolute max-[450px]:bottom-[100px] max-[450px]:left-[230px]">
//               <button
//                 className="bg-red-500 text-white rounded-lg background-transparent font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={openHandler}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainBook;
