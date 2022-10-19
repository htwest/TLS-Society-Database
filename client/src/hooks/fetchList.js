import getList from "../api/getList";
import getPending from "../api/getPending";

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
      await getPending().then((res) => {
        setDbList(res);
        setCurrentList(res);
      });
      break;
    default:
      console.log("something went wrong");
  }

  setLoading(false);
};

export default fetchList;
