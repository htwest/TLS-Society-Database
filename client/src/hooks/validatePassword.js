const validatePassword = (pass, check, setErr) => {
  if (pass !== check) {
    setErr("Your Password Does Not Match");
    return false;
  }
  return true;
};

export default validatePassword;
