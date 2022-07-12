const axios = require("axios");

const postRegister = (data) => {
  return axios
    .post("/signup", {
      user_name: data[0],
      user_password: data[1],
      user_fName: data[2],
      user_lName: data[3],
      user_email: data[4],
    })
    .then((response) => response.data);
};

export { postRegister };
