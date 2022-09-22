import React, { useState } from "react";

// components
import TableEdit from "./TableEdit";
import TableEntry from "./TableEntry";

const TableItem = ({ item, handleDescription, handleEdit, key, mod }) => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <TableEdit item={item} handleEdit={handleEdit} />
  ) : (
    <TableEntry
      item={item}
      handleDescription={handleDescription}
      mod={mod}
      setEdit={setEdit}
    />
  );
};

export default TableItem;
