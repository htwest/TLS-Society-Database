import React, { useState } from "react";

// components
import TableEdit from "./TableEdit";
import TableEntry from "./TableEntry";

const TableItem = ({ item, updateModal, key, mod }) => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <TableEdit item={item} />
  ) : (
    <TableEntry
      item={item}
      updateModal={updateModal}
      mod={mod}
      setEdit={setEdit}
    />
  );
};

export default TableItem;
