import React from "react";

const BookPage = React.forwardRef((props, ref) => {
  const main_url = "https://subone.iran.liara.run";
  console.log(props);

  return (
    <div className={`${props.number % 2 === 0 ? "right" : "left"}`} ref={ref}>
      <div className="w-full h-full flex flex-col justify-between items-stretch">
        <h2 className="h-[30px] text-gray-700 text-center mb-[6px] uppercase font-bold">
          {props.title}
        </h2>
        {props.gallery && (
          <div className="h-full bg-contain bg-center bg-no-repeat">
            <div className="flex justify-center mb-2">
              <img
                className="w-[50%] h-[110px] rounded shadow-xl"
                src={`${main_url}/${props.image}`}
                alt="main"
              />
            </div>
            <div className="flex justify-center gap-x-5">
              {props.gallery?.map((item) => (
                <img
                  key={item.image}
                  className="w-24 h-52 rounded shadow-xl"
                  src={`${main_url}/${item.image}`}
                  alt="sub"
                />
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

        <div className="h-[48%] flex-grow-[1] flex flex-col gap-y-[15px] text-justify mt-[10px] pt-[10px] box-border text-[12px]">
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
  );
});

export default BookPage;
