import axios from "./api";

const getApplicant = (id) => {
  return axios
    .get(`/mod/applicant/${id}`, {
      withCredentials: true,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default getApplicant;
