import React, { useState } from "react";

const TableEdit = ({ item }) => {
  return (
    <tr>
      <td data-heading="Institute">
        <input type="text" placeholder={item.name} />
      </td>
      <td data-heading="Semester">
        <select>
          <option>Spring</option>
          <option>Fall</option>
        </select>
      </td>
      <td data-heading="Position">
        <input type="text" placeholder={item.position} />
      </td>
      <td data-heading="Type">
        <input type="text" placeholder={item.type} />
      </td>
      <td data-heading="Start Date">{item.app_open}</td>
      <td data-heading="Deadline">{item.app_deadline}</td>
      <td data-heading="Description">
        <button className="description-button">Update</button>
      </td>
      <td>
        <button className="description-button">Done</button>
      </td>
    </tr>
  );
};

export default TableEdit;
