const validateSignUp = (
  username,
  password,
  fName,
  lName,
  email,
  setErr,
  onOpen
) => {
  if (
    username.length === 0 ||
    password.length === 0 ||
    fName.length === 0 ||
    lName.length === 0 ||
    email.length === 0
  ) {
    setErr("Please Make Sure All Fields Are Filled Out Correctly");
    onOpen();
  } else {
    return true;
  }
};

export default validateSignUp;
