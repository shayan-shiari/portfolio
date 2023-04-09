import React, { useState } from "react";
import { fetchApi } from "../../../services/api";

const AddCategory = ({ open }) => {
  const register_url = "admin/post";
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();
  const [type, setType] = useState();
  const [technologies, setTechnologies] = useState();
  const [image, setImage] = useState();
  console.log(title, description, link, type, technologies, image);
  const formHandler = (e) => {
    e.preventDefault();
    console.log("sha");
    const fo = new FormData();
    fo.append("images", image);
    console.log(fo);
    fetchApi(register_url, {
      title: title,
      description: description,
      link: link,
      type: type,
      technologie: technologies,
      image: "sd",
    }).then((res) => console.log(res));
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-2/5">
          {/*content*/}
          <div className="border-0 text-black rounded-lg shadow-lg relative w-full bg-sky-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Category</h3>
            </div>
            {/*body*/}
            <form onSubmit={formHandler}>
              <div className="flex flex-col gap-y-5 p-5">
                <fieldset className="flex flex-col">
                  <label htmlFor="">title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">description</label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">link</label>
                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">type</label>
                  <input
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">technologies</label>
                  <input
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">image</label>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    name=""
                    id=""
                  />
                </fieldset>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => open(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  // onClick={() => open(false)}
                >
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddCategory;
