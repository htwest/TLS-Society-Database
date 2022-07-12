const validateSignUp = (
  username,
  password,
  fName,
  lName,
  email,
  setErr,
  setErrMsg
) => {
  if (
    username.length === 0 ||
    password.length === 0 ||
    fName.length === 0 ||
    lName.length === 0 ||
    email.length === 0
  ) {
    setErr(true);
    setErrMsg("Please Fill Out All Boxes");
  } else {
    return true;
  }
};

export default validateSignUp;
