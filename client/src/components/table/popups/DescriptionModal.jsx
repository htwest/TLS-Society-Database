import React, { useState, useEffect } from "react";

import ReactDom from "react-dom";
import "../../../css/table/Modal.css";

// Hooks
import fetchApplicant from "../../../hooks/fetchApplicant";

const DescriptionModal = ({ modalOpen, setModalOpen, data, tableForm }) => {
  const [applicant, setApplicant] = useState("");

  useEffect(() => {
    switch (tableForm) {
      case "dashboard":
        break;
      case "pending":
        fetchApplicant(data.user_id, setApplicant);
        break;
      default:
        break;
    }
  }, [tableForm, data]);

  console.log(applicant);

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setModalOpen(!modalOpen)} />
      <div className="modal-container">
        <h3>{data.name}</h3>
        <div className="modal-content">
          <div className="info">
            <div className="info-left">
              <p>Type: </p>
              <p>{data.type}</p>

              <p>Postition: </p>
              <p>{data.position}</p>
              <p>Semester: </p>
              <p>{data.semester}</p>
              <p>Contact: </p>
              <p>{data.poc_name}</p>
              {tableForm === "pending" ? (
                <>
                  <p>Applicant: </p>
                  <p>{applicant}</p>
                </>
              ) : null}
            </div>
            <div className="info-right">{data.description}</div>
          </div>
          <div className="button-group">
            <button onClick={() => setModalOpen(!modalOpen)}>
              Close Modal
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default DescriptionModal;
