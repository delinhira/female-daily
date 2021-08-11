import axios from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const getData = (callback, errorCalback) => {
  axios
    .get(`${baseUrl}/wp`)
    .then((data) => callback(data))
    .catch((err) => errorCalback(err));
};
