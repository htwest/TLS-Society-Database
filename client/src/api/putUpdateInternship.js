const axios = require("axios");

const putUpdateInternship = (id) => {
  return axios
    .put(`/mod/update/${id}`, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default putUpdateInternship;
