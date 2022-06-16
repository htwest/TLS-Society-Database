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

const userLogin = (data) => {
  return axios
    .post("/login", {
      user_name: data[0],
      user_password: data[1],
    })
    .then((response) => response.data);
};

// const userSignup = () => {};

export { fetchTodos, userLogin };
