import React, { useState, useContext } from "react";

// Context
import UserContext from "../../utils/UserContext";

// Components
import TableItem from "./TableItem";
import DescriptionModal from "./popups/DescriptionModal";
import EditModal from "./popups/EditModal";

const Table = ({ list, loading }) => {
  // State
  const [modalData, setModalData] = useState();
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  // Context
  const { user } = useContext(UserContext);

  // Functions
  const handleDescription = (data) => {
    setModalData(data);
    setDescriptionOpen(!descriptionOpen);
  };

  const handleEdit = (data) => {
    setModalData(data);
    setEditOpen(!editOpen);
  };

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      {descriptionOpen ? (
        <DescriptionModal
          modalOpen={descriptionOpen}
          setModalOpen={setDescriptionOpen}
          data={modalData}
        />
      ) : null}
      {editOpen ? (
        <EditModal
          modalOpen={editOpen}
          setModalOpen={setEditOpen}
          data={modalData}
        />
      ) : null}
      <table className="content-table">
        <thead>
          <tr>
            <th>Institute</th>
            <th>Semester</th>
            <th>Position</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Description</th>
            {user.mod ? <th>Edit</th> : null}
          </tr>
        </thead>
        <tbody>
          {list
            ? list.map((item) => (
                <TableItem
                  item={item}
                  key={item.id}
                  handleDescription={handleDescription}
                  handleEdit={handleEdit}
                  mod={user.mod}
                />
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Table;
