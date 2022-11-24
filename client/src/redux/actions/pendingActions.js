export const add = (id) => {
  return {
    type: "ADD",
    payload: id,
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
