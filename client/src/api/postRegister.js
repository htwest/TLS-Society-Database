const axios = require("axios");

const postRegister = (userData) => {
  return axios
    .post(
      "/auth/register",
      {
        username: userData[0],
        fName: userData[1],
        lName: userData[2],
        email: userData[3],
        password: userData[4],
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postRegister;
