const axios = require("axios");

const testLogIn = (user, pass) => {
  return axios
    .post(
      "/test/login",
      {
        username: user,
        password: pass,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default testLogIn;
