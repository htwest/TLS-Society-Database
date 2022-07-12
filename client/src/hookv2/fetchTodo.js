const axios = require("axios");

const fetchTodos = () => {
  return axios.get("/todos").then((response) => response.data);
};

export { fetchTodos };
