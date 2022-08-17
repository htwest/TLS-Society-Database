import getList from "../api/getList";

const fetchList = async (setDbList) => {
  await getList().then((res) => {
    setDbList(res);
  });
};

export default fetchList;
