import getUnapproved from "../api/getUnapproved";

const fetchUnapproved = async (setUnapproved) => {
  await getUnapproved().then((res) => {
    setUnapproved(res);
  });
};

export default fetchUnapproved;
