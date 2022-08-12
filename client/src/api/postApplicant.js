const axios = require("axios");

const postApplicant = (data) => {
  return axios
    .post("/test/register", data, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postApplicant;
