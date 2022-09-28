import React, { useState } from "react";
import ReactDom from "react-dom";
import "../../../css/dashboard/table/Modal.css";

const EditModal = ({ modalOpen, setModalOpen, data }) => {
  const [name, setName] = useState(data.name);
  const [semester, setSemester] = useState(data.semester);
  const [position, setPosition] = useState(data.position);
  const [type, setType] = useState(data.type);
  const [poc_name, setPoc_Name] = useState(data.poc_name);
  const [poc_email, setPoc_Email] = useState(data.poc_email);
  const [app_open, setApp_Open] = useState(data.app_open);
  const [deadline, setDeadline] = useState(data.app_deadline);
  const [description, setDescription] = useState(data.description);

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setModalOpen(!modalOpen)} />
      <div className="modal-container">
        <div className="modal-content">
          {/* name */}
          <label for="name">Institute</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* semester */}
          <label for="semester">Semester</label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
          </select>
          {/* position */}
          <label for="position">Position</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          {/* type */}
          <label for="type">Type of Law</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Government">Government</option>
            <option value="Emerging Technology">Emerging Technology</option>
            <option value="AI">AI</option>
            <option value="National Security">National Security</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Other">Other</option>
          </select>
          {/* poc_name */}
          <label for="poc_name">Point of Contact</label>
          <input
            type="text"
            id="poc_name"
            value={poc_name}
            onChange={(e) => setPoc_Name(e.target.value)}
          />
          {/* poc_email */}
          <input
            type="text"
            value={poc_email}
            onChange={(e) => setPoc_Email(e.target.value)}
          />
          {/* app_open */}
          <label for="deadline">Deadlines</label>
          <input
            type="date"
            id="app_open"
            value={app_open}
            onChange={(e) => {
              setApp_Open(e.target.value);
            }}
          />
          {/* app_deadline */}
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
          {/* description */}
          <label for="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={() => setModalOpen(!modalOpen)}>Close Modal</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditModal;
