const validatePassword = (pass, check, setPassErr) => {
  if (pass !== check) {
    setPassErr(true);
    return false;
  }
  return true;
};

export default validatePassword;
