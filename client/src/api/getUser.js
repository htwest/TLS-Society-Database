import axios from "./api";

const getUser = () => {
  return axios
    .get(`/auth/user`, { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default getUser;
