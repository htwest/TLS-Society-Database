import axios from "./api";

const getPending = () => {
  return axios.get("/mod/pending").then((response) => response.data);
};

export default getPending;
