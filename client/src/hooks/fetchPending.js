import getPending from "../api/getPending";

const fetchList = async (setDbList) => {
  const pending = await getPending();
  setDbList(pending);
};

export default fetchList;
