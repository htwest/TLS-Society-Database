const validateLogin = (user, pass, setErr) => {
  if ((!user || user.length < 1) && (!pass || pass.length < 1)) {
    setErr("Plese Fill In Your Username & Password");
    return false;
  }
  if (!user || user.length < 1) {
    setErr("Please Fill In Your Username");
    return false;
  }
  if (!pass || pass.length < 1) {
    setErr("Please Fill In Your Password");
    return false;
  }
  return true;
};

export default validateLogin;
