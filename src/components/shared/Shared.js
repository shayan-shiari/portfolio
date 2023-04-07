import React from "react";

const Shared = ({ image }) => {
  return (
    <div>
      <div
        className="book-container"
      >
        <div className="book">
          <img
            alt="The Outstanding Developer by Sebastien Castiel"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default Shared;
