import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="dark:bg-slate-700 dark:text-white bg-white text-slate-800 w-44 sideBar-height">
      <Link
        to="/dashboard/posts"
        className="p-3 flex gap-x-2 justify-center items-center text-2xl hover:bg-gray-300 dark:hover:text-black transition-all"
      >
        <ion-icon name="newspaper-outline"></ion-icon>
        <span className="w-full">Posts</span>
      </Link>
      <Link
        to="/dashboard/gallery"
        className="p-3 flex gap-x-2 justify-center items-center text-2xl hover:bg-gray-300 dark:hover:text-black transition-all"
      >
        <ion-icon name="images-outline"></ion-icon>
        <span className="w-full">Gallery</span>
      </Link>
    </aside>
  );
};

export default Aside;
