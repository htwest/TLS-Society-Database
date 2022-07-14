const axios = require("axios");

const getUnapproved = () => {
  return axios.get("/db/unapproved").then((response) => response.data);
};

export default getUnapproved;
