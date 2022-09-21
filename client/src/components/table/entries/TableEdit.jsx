import React, { useState } from "react";

const TableEdit = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [semester, setSemester] = useState(item.semester);
  const [position, setPosition] = useState(item.position);
  const [type, setType] = useState(item.type);
  const [poc_name, setPoc_Name] = useState(item.poc_name);
  const [poc_email, setPoc_Email] = useState(item.poc_email);
  const [app_open, setApp_Open] = useState(item.app_open);
  const [app_deadline, setApp_Deadline] = useState(item.app_deadline);
  const [description, setDescription] = useState(item.description);

  return (
    <tr>
      <td data-heading="Institute">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td data-heading="Semester">
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option>Spring</option>
          <option>Fall</option>
        </select>
      </td>
      <td data-heading="Position">
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </td>
      <td data-heading="Type">
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </td>
      <td data-heading="Start Date">
        <input
          type="date"
          value={app_open}
          onChange={(e) => setApp_Open(e.target.value)}
        />
      </td>
      <td data-heading="Deadline">
        <input
          type="date"
          value={app_deadline}
          onChange={(e) => setApp_Deadline(e.target.value)}
        />
      </td>
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
