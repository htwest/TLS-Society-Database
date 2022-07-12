const axios = require("axios");

const testRegister = (user, pass, fName, lName, email) => {
  return axios
    .post(
      "/test/register",
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
    .then((response) => response.data);
};

export default testRegister;
