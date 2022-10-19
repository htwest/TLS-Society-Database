import getList from "../api/getList";

const fetchList = async (setLoading, setDbList, setCurrentList, tableForm) => {
  setLoading(true);

  switch (tableForm) {
    case "dashboard":
      await getList().then((res) => {
        setDbList(res);
        setCurrentList(res);
      });
      break;
    case "pending":
      // fetch from Pending
      break;
    default:
      console.log("something went wrong");
  }

  setLoading(false);
};

export default fetchList;
