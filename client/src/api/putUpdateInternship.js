const axios = require("axios");

const putUpdateInternship = (id, data) => {
  return axios
    .put(`/mod/update/${id}`, data, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default putUpdateInternship;
