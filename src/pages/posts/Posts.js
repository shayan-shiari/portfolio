import React, { useEffect, useState } from "react";
import PannelWrapper from "../../components/pannel-wrapper/PannelWrapper";
import AddCategory from "./add-modal/AddPost";
// import Table from "../../core-ui/Table";
import { fetchApi } from "../../services/api";

const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const deleteHandler = (id) => {
    console.log(id);
    fetchApi(`admin/post/${id}`, "delete").then((res) => console.log(res));
  };

  const fetchPosts = () => {
    fetchApi("admin/post").then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PannelWrapper>
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
                <th scope="col" class="px-6 py-3">
                  title
                </th>
                <th scope="col" class="px-6 py-3">
                  description
                </th>
                <th scope="col" class="px-6 py-3">
                  link
                </th>
                <th scope="col" class="px-6 py-3">
                  type
                </th>
                <th scope="col" class="px-6 py-3">
                  technologies
                </th>
                <th scope="col" class="px-6 py-3">
                  image
                </th>
                <th scope="col" class="px-6 py-3">
                  delete
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((item) => {
                return (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.attributes.title}
                    </th>
                    <td className="px-6 py-4">{item.attributes.description}</td>
                    <td className="px-6 py-4">{item.attributes.link}</td>
                    <td className="px-6 py-4">{item.attributes.type}</td>
                    <td className="px-6 py-4">
                      {item.attributes.technologies}
                    </td>
                    <td className="px-6 py-4 flex justify-center">
                      <img
                        className="w-20 rounded"
                        src={`http://127.0.0.1:8000/${item.attributes.image.indexArray.small}`}
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {isOpen && <AddCategory fetchPosts={fetchPosts} open={setIsOpen} />}
    </PannelWrapper>
  );
};

export default Posts;
