import React from "react";

const BookPage = React.forwardRef((props, ref) => {
  return (
    <div
      className={`${props.number % 2 === 0 ? "page right" : "page left"}`}
      ref={ref}
    >
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});

export default BookPage;
