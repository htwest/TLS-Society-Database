function validateForm(setErr, onOpen, ...args) {
  let validated = true;
  args.forEach((arg) => {
    if (arg === undefined || arg.length === 0) {
      validated = false;
      setErr("Please Make Sure All Forms Are Filled Out Correctly");
      onOpen();
    }
  });
  return validated;
}

export default validateForm;
