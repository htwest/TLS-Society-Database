const axios = require("axios");

const postLogin = (user, pass) => {
  return axios
    .post(
      "/auth/login",
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

export default postLogin;
