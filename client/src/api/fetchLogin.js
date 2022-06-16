const axios = require("axios");

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

const fetchTodos = () => {
  return axios.get("/todos").then((response) => response.data);
};

const userLogin = () => {
  axios.post("/login").then((response) => response.data);
};

// const userSignup = () => {};

export { fetchTodos, userLogin };
