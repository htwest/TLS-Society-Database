import ReactDom from "react-dom";
import "../../../css/dashboard/table/Modal.css";

const EditDescriptionModal = ({ modalOpen, setModalOpen, data }) => {
  console.log(data);

  if (!modalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setModalOpen(!modalOpen)} />
      <div className="modal-container">
        <div className="data-container">
          <div className="edit-info">
            <div className="edit-block">
              <span className="edit-label">
                <strong>Contact Name: </strong>
              </span>
              <input value={data.poc_name} />
            </div>
            <div className="edit-block">
              <span className="edit-label">
                <strong>Contact Email: </strong>
              </span>
              <input value={data.poc_email} />
            </div>
            <div className="edit-description">
              <span className="edit-label">
                <strong>Description: </strong>
              </span>
              <textarea value={data.description} />
            </div>
          </div>
        </div>
        <button onClick={() => setModalOpen(!modalOpen)}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditDescriptionModal;
