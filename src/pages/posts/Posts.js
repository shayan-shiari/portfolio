import React, { useEffect, useState } from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import AddPost from "./add-modal/AddPost";
import AddImage from "./add-image/AddImage";
import { fetchApi } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Posts = () => {
  const main_url = "https://subone.iran.liara.run";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(data);
  const deleteHandler = (id) => {
    setLoading(true)
    console.log(id);
    fetchApi(`admin/post/${id}`, "delete").then((res) => {
      toast.success(res.message);
      setLoading(false)
      fetchPosts();
    });
  };

  const fetchPosts = () => {
    fetchApi("admin/post").then((res) => {
      setLoading(false);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();

    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate("/");
    }
  }, []);

  return (
    <PannelWrapper>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex justify-between p-5 border-b-2 border-indigo-500">
            <span className="text-black dark:text-white">title</span>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-sky-500 dark:text-white p-1 rounded-md text-black"
            >
              add post
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-center text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    technologies
                  </th>
                  <th scope="col" className="px-6 py-3">
                    image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    delete
                  </th>
                  <th scope="col" className="px-6 py-3">
                    add-image
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.attributes.title}
                      </th>
                      <td className="px-6 py-4">
                        {item.attributes.description}
                      </td>
                      <td className="px-6 py-4">{item.attributes.link}</td>
                      <td className="px-6 py-4">{item.attributes.type}</td>
                      <td className="px-6 py-4">
                        {item.attributes.technologies}
                      </td>
                      <td className="px-6 py-4 flex justify-center">
                        <img
                          className="w-96 rounded"
                          src={`${main_url}/${item.attributes.image}`}
                          alt="post"
                        />
                      </td>
                      <td
                        onClick={() => deleteHandler(item.id)}
                        className="text-red-600 text-2xl"
                      >
                        <button>
                          <ion-icon
                            className="cursor-pointer"
                            name="trash-outline"
                          ></ion-icon>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            setIsOpen2(true);
                            setId(item.id);
                          }}
                          className="text-green-600 text-2xl"
                        >
                          <ion-icon name="add-circle-outline"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isOpen && <AddPost fetchPosts={fetchPosts} open={setIsOpen} />}
      {isOpen2 && (
        <AddImage id={id} fetchPosts={fetchPosts} open={setIsOpen2} />
      )}
    </PannelWrapper>
  );
};

export default Posts;
