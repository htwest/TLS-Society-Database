function validateForm(setErr, onOpen, data) {
  let validated = true;
  for (const item in data) {
    if (data[item] === undefined || data[item].length === 0) {
      validated = false;
      setErr("Please Make Sure All Forms Are Filled Out Correctly");
      onOpen();
    }
  }
  return validated;
}

export default validateForm;
