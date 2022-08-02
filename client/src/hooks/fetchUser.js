const fetchUser = () => {
  let currentUser = window.localStorage.getItem("user");
  if (currentUser) {
    currentUser = JSON.parse(currentUser);
  }
  return currentUser;
};

export default fetchUser;
