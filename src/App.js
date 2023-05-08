import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/posts" element={<Posts />} />
      </Routes>
    </>
  );
};

export default App;
