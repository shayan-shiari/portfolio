import React, { useState } from "react";
import { fetchApi } from "../../../services/api";
import { toast } from "react-hot-toast";
import Loader from "../../../components/loader/Loader";

const AddImage = ({ open, fetchPosts, id }) => {
  const register_url = `admin/gallery/${id}`;
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const formHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", image);
    fetchApi(register_url, formData, "multi").then((res) => {
      toast.success(res.message);
      open(false);
      fetchPosts();
      setLoading(false);
    });
  };

  return (
    <>
      {loading ? (
        <div className="fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.6)]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mx-auto w-2/5">
              {/*content*/}
              <div className="border-0 text-black rounded-lg shadow-lg relative w-full bg-sky-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Add Image
                  </h3>
                </div>
                {/*body*/}
                <form onSubmit={formHandler}>
                  <div className="flex flex-col gap-y-5 p-5">
                    <fieldset className="flex items-center flex-col">
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
      )}
    </>
  );
};

export default AddImage;
