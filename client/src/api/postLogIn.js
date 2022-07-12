const axios = require("axios");

const postLogIn = (user, pass) => {
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

export default postLogIn;
