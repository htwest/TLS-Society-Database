import axios from "./api";

const postLogin = (username, password) => {
  return axios
    .post(
      `/auth/login`,
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .catch((err) => {
      console.log(err);
    })
    .then((response) => response);
};

export default postLogin;
