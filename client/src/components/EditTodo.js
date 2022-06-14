import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditTodo = ({ todo }) => {
  // States
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(todo.description);

  // Functions
  const handleClose = () => {
    setShow(false);
    setDescription(todo.description);
  };
  const handleShow = () => setShow(true);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const id = todo.todo_id;

      const response = await fetch(`/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* Button */}
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={(e) => {
              updateDescription(e);
            }}
          >
            Edit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default EditTodo;
