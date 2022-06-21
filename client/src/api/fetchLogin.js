const axios = require("axios");

const fetchTodos = () => {
  return axios.get("/todos").then((response) => response.data);
};

const userLogin = (data) => {
  return axios
    .post("/userlogin", {
      user_name: data[0],
      user_password: data[1],
    })
    .then((response) => response.data);
};

export { fetchTodos, userLogin };
