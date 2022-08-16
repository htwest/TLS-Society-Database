function validateForm(data, errorCheck) {
  let validated = true;
  let errors = [];
  for (const item in data) {
    if (data[item] === undefined || data[item].length === 0) {
      errors.push(item);
      validated = false;
    }
  }
  if (errors.length > 0) {
    errorCheck(errors);
  }
  console.log(errors);
  return validated;
}

export default validateForm;
