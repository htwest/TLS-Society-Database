function validateInternship(setErr, onOpen, ...args) {
  let validated = true;
  args.forEach((arg) => {
    if (arg === undefined) {
      validated = false;
      setErr("Please Fill Out Entire Form");
      onOpen();
    }
  });
  return validated;
}

export default validateInternship;
