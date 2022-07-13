const axios = require("axios");

const postRegister = (user, pass, fName, lName, email) => {
  return axios
    .post(
      "/auth/register",
      {
        username: user,
        password: pass,
        fName: fName,
        lName: lName,
        email: email,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postRegister;
