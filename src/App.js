import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";
import Gallery from "./pages/gallery/Gallery";

const App = () => {
  return (
    <div className="w-[1400px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/posts" element={<Posts />} />
        <Route path="/dashboard/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
