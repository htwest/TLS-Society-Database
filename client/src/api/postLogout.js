import axios from "./api";

const postLogout = () => {
  return axios
    .post("/auth/logout", { withCredentials: true })
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postLogout;
