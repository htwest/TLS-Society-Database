import getList from "../api/getList";

const fetchList = async (setLoading, setDbList, setCurrentList) => {
  setLoading(true);
  await getList().then((res) => {
    setDbList(res);
    setCurrentList(res);
  });
  setLoading(false);
};

export default fetchList;
