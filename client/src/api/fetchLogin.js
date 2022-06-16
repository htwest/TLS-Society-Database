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

// const fetchTodos = () => {
//   axios
//     .get("/todos")
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const fetchTodos = () => {
  return axios.get("/todos").then((response) => response.data);
};

const userLogin = () => {
  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const userSignup = () => {};

export { fetchTodos, userLogin };
