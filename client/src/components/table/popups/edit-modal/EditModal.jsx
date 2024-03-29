import React, { useState } from "react";
import ReactDom from "react-dom";
import "../../../../css/table/Modal.css";

// Components
import InputBox from "./InputBox";

// Api
import putUpdateInternship from "../../../../api/putUpdateInternship";

const EditModal = ({ modalOpen, setModalOpen, data, tableForm }) => {
  // States
  const [modalData, setModalData] = useState(data);
  const [step, setStep] = useState(1);

  const handleUpdate = async () => {
    await putUpdateInternship(data.id, modalData, tableForm)
      .then(() => {
        stepUp();
      })
      .catch((err) => {
        setStep(4);
      });
  };

  const resetStep = () => {
    setStep(1);
  };

  const stepUp = () => {
    setStep(step + 1);
  };

  const stepDown = () => {
    setStep(step - 1);
  };

  return ReactDom.createPortal(
    <>
      <div
        className="overlay"
        onClick={() => {
          resetStep();
          setModalOpen(!modalOpen);
        }}
      />
      <div className="modal-container">
        <div className="modal-content">
          {/* Display */}

          {step === 1 ? (
            <InputBox modalData={modalData} setModalData={setModalData} />
          ) : null}
          {step === 2 ? (
            <div className="final-check">
              <h3>You Are About To Update This Information</h3>
              <h5>Are you Sure?</h5>
            </div>
          ) : null}
          {step === 3 ? (
            <div className="message">
              <h3>You Have Succesfully Updated The Information</h3>
            </div>
          ) : null}
          {step === 4 ? (
            <div className="message">
              <h3>Unable To Update Information</h3>
              <h5>Please try Again</h5>
            </div>
          ) : null}

          {/* Button Groups */}

          {step === 1 ? (
            <div className="button-group">
              <button onClick={() => setModalOpen(!modalOpen)}>Close</button>
              <button onClick={() => stepUp()}>Update</button>
            </div>
          ) : null}
          {step === 2 ? (
            <div className="button-group">
              <button onClick={() => stepDown()}>Cancel</button>
              <button onClick={() => handleUpdate()}>Accept</button>
            </div>
          ) : null}
          {step === 3 ? (
            <div className="button-group">
              <button
                onClick={() => {
                  resetStep();
                  setModalOpen(!modalOpen);
                }}
              >
                Close
              </button>
            </div>
          ) : null}
          {step === 4 ? (
            <div className="button-group">
              <button onClick={() => resetStep()}>Back</button>
              <button
                onClick={() => {
                  resetStep();
                  setModalOpen(!modalOpen);
                }}
              >
                Cancel
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditModal;
