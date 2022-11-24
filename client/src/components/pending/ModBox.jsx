import React from "react";

// Components
import TableDock from "../table/TableDock";

const ModBox = () => {
  return (
    <div className="mod-box">
      <div className="pending-header">
        <h1>Pending Applications</h1>
        <h3>Please Review Carefully Before Proceeding</h3>
      </div>
      <TableDock tableForm="pending" />
    </div>
  );
};

export default ModBox;
