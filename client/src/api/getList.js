import axios from "./api";

const getList = () => {
  return axios.get("/db/list").then((response) => response.data);
};

export default getList;
