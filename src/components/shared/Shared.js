import React from "react";

const Shared = ({ image }) => {
  return (
    <div className="book-container">
      <div className="book">
        <img alt="magic-book" src={image} />
      </div>
    </div>
  );
};

export default Shared;
