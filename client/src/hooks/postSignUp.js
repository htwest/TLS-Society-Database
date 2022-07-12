const axios = require("axios");

const postSignUp = (user, pass) => {
  return axios
    .post(
      "/auth/register",
      {
        username: user,
        password: pass,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postSignUp;
