import React from "react";

const TableItem = ({ item }) => {
  return (
    <tr>
      <td data-heading="Institute">{item.name}</td>
      <td data-heading="Semester">{item.semester}</td>
      <td data-heading="Position">{item.position}</td>
      <td data-heading="Type">{item.type}</td>
      <td data-heading="Contact">{item.poc_name}</td>
      <td data-heading="Start Date">{item.app_open}</td>
      <td data-heading="Deadline">{item.app_deadline}</td>
    </tr>
  );
};

export default TableItem;
