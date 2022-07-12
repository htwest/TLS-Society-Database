const axios = require("axios");

const postLogin = (data) => {
  return axios
    .post("/userlogin", {
      user_name: data[0],
      user_password: data[1],
    })
    .then((response) => response.data);
};

export { postLogin };
