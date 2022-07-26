const validateSignUp = (username, password, fName, lName, email) => {
  if (
    username.length === 0 ||
    password.length === 0 ||
    fName.length === 0 ||
    lName.length === 0 ||
    email.length === 0
  ) {
    return false;
  } else {
    return true;
  }
};

export default validateSignUp;
