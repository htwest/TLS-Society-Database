const axios = require("axios");

const postRegister = (user, pass, fName, lName, email) => {
  return axios
    .post(
      "/auth/register",
      {
        user_name: user,
        user_password: pass,
        user_fName: fName,
        user_lName: lName,
        user_email: email,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postRegister;
