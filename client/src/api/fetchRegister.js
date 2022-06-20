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

const userRegister = (data) => {
  return axios
    .post("/signup", {
      user_name: data[0],
      user_password: data[1],
      user_fName: data[2],
      user_lName: data[3],
      user_email: data[4],
    })
    .then((response) => response.data);
};

// const userSignup = () => {};

export { userRegister };
