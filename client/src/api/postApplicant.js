const axios = require("axios");

const postApplicant = (userData) => {
  return axios
    .post(
      "/auth/register",
      {
        username: userData.username,
        fName: userData.fName,
        lName: userData.lName,
        email: userData.email,
        password: userData.password,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postApplicant;
