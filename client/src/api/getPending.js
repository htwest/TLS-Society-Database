const axios = require("axios");

const getPending = () => {
  return axios.get("/mod/pending").then((response) => response.data);
};

export default getPending;
