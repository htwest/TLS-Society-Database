const axios = require("axios");

const postLogin = (data) => {
  const username = data.username;
  const password = data.pass;
  return axios
    .post(
      "/auth/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postLogin;
