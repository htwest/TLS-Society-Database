import React from "react";

// Components
import TableDock from "../table/TableDock";

const ModBox = () => {
  return (
    <div className="mod-container">
      <h3>Pending Applications</h3>
      <h5>Please Review Carefully Before Proceeding</h5>
      <TableDock />
    </div>
  );
};

export default ModBox;
