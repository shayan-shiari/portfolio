import React from "react";

const BookPage = React.forwardRef((props, ref) => {
  return (
    <div
      className={`${props.number % 2 === 0 ? "page right" : "page left"}`}
      ref={ref}
    >
      <div className="page-content">
        <h2 className="page-header">{props.title}</h2>
        <div className="page-image">
          <div className="flex justify-center mb-3">
            <img
              className="w-[35%] rounded"
              src={`http://127.0.0.1:8000/${props.image}`}
              alt=""
            />
          </div>
          <div className="flex justify-center gap-x-5">
            {props.gallery.map((item) => (
              <img
                className="w-[25%] rounded"
                src={`http://127.0.0.1:8000/${item.image.indexArray.medium}`}
              />
            ))}
          </div>
        </div>
        <div className="page-text">
          <div>
            <p className="inline text-blue-600 font-bold">Description:</p>
            {props.children}
          </div>
          <div>
            <p className="inline text-blue-600 font-bold">Technologies:</p>
            {props.technologies}
          </div>
          <div>
            <p className="inline text-blue-600 font-bold">Link: </p>
            {props.link}
          </div>
        </div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});

export default BookPage;
