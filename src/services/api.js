import axios from "axios";
const main_url = "http://127.0.0.1:8000/api";

export const fetchApi = async (url, body) => {
  let lastResult;
  // token
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  if (body) {
    await axios
      .post(`${main_url}/${url}`, body, {
        headers: {
          "Content-Type": "Multipart/from-data",
          Accept: "application/json",
          Authorization: "bearer" + token,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  } else {
    await axios
      .get(`${main_url}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          // "admin-API-Token": tokens,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  }
  return lastResult.data;
};
