const axios = require("axios");

const putApproveUser = (username) => {
  return axios
    .put(`/mod/approve/${username}`, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default putApproveUser;
