import axios from "./api";

const putUpdateInternship = (id, data, tableForm) => {
  console.log(id, data, tableForm);

  switch (tableForm) {
    case "dashboard":
      return axios
        .put(`/mod/update/${id}`, data, { withCredentials: true })
        .catch((err) => {
          console.log(err);
        })
        .then((response) => response);
    case "pending":
      return axios
        .put(`/mod/pending/update${id}`, data, {
          withCredentials: true,
        })
        .catch((err) => {
          console.log(err);
        })
        .then((response) => response);
    default:
      console.log("UNABLE TO UPDATE: putUpdateInternship");
  }
};

export default putUpdateInternship;
