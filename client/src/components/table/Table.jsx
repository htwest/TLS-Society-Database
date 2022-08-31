import React from "react";

const Table = ({ tableData, headingColumns, title, breakOn = "medium" }) => {
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

  const data = tableData.map((row, index) => {
    let rowData = [];
    let i = 0;
    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td key={index} data-heading={data.key}>
            {data.val}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default Table;
