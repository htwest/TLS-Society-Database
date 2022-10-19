import getApplicant from "../api/getApplicant";

const fetchApplicant = async (id, setApplicant) => {
  await getApplicant(id).then((res) => {
    setApplicant(res);
  });
};

export default fetchApplicant;
