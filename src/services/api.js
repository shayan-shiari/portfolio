import axios from "axios";
const main_url = "https://subone.iran.liara.run/api";

export const fetchApi = async (url, body, type) => {
  let lastResult;
  // token
  let token = JSON.parse(localStorage.getItem("token"));
  
  if (type === "multi") {
    await axios
      .post(`${main_url}/${url}`, body, {
        headers: {
          "Content-Type": "multipart/from-data",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  } else if (type === "normal") {
    await axios
      .post(`${main_url}/${url}`, body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  } else if (type === "delete") {
    await axios
      .post(`${main_url}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
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
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  }
  return lastResult.data;
};
