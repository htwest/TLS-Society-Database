const axios = require("axios");

const getList = () => {
  return axios.get("/db/list").then((response) => response.data);
};

export default getList;
