import axios from "./api";

const postApplicant = (data) => {
  return axios
    .post("/auth/register", data, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response.data);
};

export default postApplicant;
