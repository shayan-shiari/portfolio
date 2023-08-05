import React from "react";
import loader from "./loader-gif/loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Loader;
