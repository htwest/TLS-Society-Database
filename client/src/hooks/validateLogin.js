const validateLogin = (user, pass) => {
  if ((!user || user.length < 1) && (!pass || pass.length < 1)) {
    return false;
  }
  if (!user || user.length < 1) {
    return false;
  }
  if (!pass || pass.length < 1) {
    return false;
  }
  return true;
};

export default validateLogin;
