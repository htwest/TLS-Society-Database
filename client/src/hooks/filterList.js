const filterList = (search, field, semester, dbList, setCurrentList) => {
  const filter = {
    type: field,
    semester: semester,
  };

  const nameFilter = dbList.filter((item) => {
    if (search === "" || search === undefined) {
      return item;
    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
    return null;
  });

  const filteredList = nameFilter.filter((item) => {
    if (
      (filter.type === item.type ||
        filter.type === undefined ||
        filter.type === "") &&
      (filter.semester === item.semester ||
        filter.semester === undefined ||
        filter.semester === "")
    ) {
      return item;
    }
    return false;
  });

  setCurrentList(filteredList);
};

export default filterList;
