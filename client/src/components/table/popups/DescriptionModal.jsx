import ReactDom from "react-dom";
import "../../../css/dashboard/table/Modal.css";

const DescriptionModal = ({ modalOpen, setModalOpen, data }) => {
  if (!modalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setModalOpen(!modalOpen)} />
      <div className="modal-container">
        <h3>{data.name}</h3>
        <div className="data-container">
          <div className="info">
            <span>
              <strong>Type: </strong>
              {data.type}
            </span>
            <span>
              <strong>Postition: </strong>
              {data.position}
            </span>
            <span>
              <strong>Semester: </strong>
              {data.semester}
            </span>
            <span>
              <strong>Contact: </strong>
              {data.poc_name}
            </span>
          </div>
          <div className="description">{data.description}</div>
        </div>
        <button onClick={() => setModalOpen(!modalOpen)}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default DescriptionModal;
