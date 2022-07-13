const validateLogIn = (username, password, setUsrErr, setPassErr) => {
  if (
    (username.length === 0 || !username) &&
    (password.length === 0 || !password)
  ) {
    setUsrErr("Enter a valid username");
    setPassErr("Enter a valid password");
  } else if (!username || username.length === 0) {
    setUsrErr("Enter a valid username");
  } else if (!password || password.length === 0) {
    setPassErr("Enter a valid password");
  } else {
    return true;
  }
};

export default validateLogIn;
