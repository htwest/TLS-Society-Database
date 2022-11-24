const pendingReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      // Add entry id to array
      state = state.slice();
      state.push(action.payload);
      return state;

    case "REMOVE":
      // find in array and remove
      state = state.slice();
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
      return state;

    default:
      return state;
  }
};

export default pendingReducer;
