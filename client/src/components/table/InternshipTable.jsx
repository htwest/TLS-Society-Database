import React, { useState, useEffect } from "react";
import "../../css/Table.scss";

// Hooks
import fetchList from "../../hooks/fetchList";

// Components
import Table from "./Table";
import TableItem from "./TableItem";

const InternshipTable = ({ breakOn = "large" }) => {
  const [dbList, setDbList] = useState();
  console.log(dbList);

  useEffect(() => {
    fetchList(setDbList);
  }, []);

  // Responsive
  let tableClass = "table-container__table";

  switch (breakOn) {
    case "small":
      tableClass += " table-container__table--break-sm";
      break;
    case "medium":
      tableClass += " table-container__table--break-md";
      break;
    case "large":
      tableClass += " table-container__table--break-lg";
      break;
    default:
      tableClass += " table-container__table--break-md";
      break;
  }

  return (
    <div className="table-container">
      <div className="table-container__title">
        <h2>Internships</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            <td data-heading="Institute">Institute</td>
            <td data-heading="Semester">Semester</td>
            <td data-heading="Position">Position</td>
            <td data-heading="Type">Type</td>
            <td data-heading="Contact">Contact</td>
            <td data-heading="Start Date">Start Date</td>
            <td data-heading="Deadline">Deadline</td>
          </tr>
        </thead>
        <tbody>
          {dbList
            ? dbList.map((item) => <TableItem item={item} key={item.id} />)
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default InternshipTable;
