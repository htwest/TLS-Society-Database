import getUser from "../api/getUser";

const fetchUser = async (setUser) => {
  await getUser().then((res) => {
    setUser(res.data);
  });
};

export default fetchUser;
