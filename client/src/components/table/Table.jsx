import React, { useState, useContext } from "react";

// Context
import UserContext from "../../utils/UserContext";

// Components
import TableItemDash from "./table-items/TableItemDash";
import TableItemPending from "./table-items/TableItemPending";
import DescriptionModal from "./popups/DescriptionModal";
import EditModal from "./popups/edit-modal/EditModal";

const Table = ({ list, loading, tableForm }) => {
  // State
  const [modalData, setModalData] = useState(); // Data for Modal
  const [descriptionOpen, setDescriptionOpen] = useState(false); // Sets Description-Modal open/close
  const [editOpen, setEditOpen] = useState(false); // Sets Edit-Modal open/close

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

  // Renders Dashboard Table
  const dashMap = () => {
    return list.map((item) => (
      <TableItemDash
        item={item}
        key={item.id}
        handleDescription={handleDescription}
        handleEdit={handleEdit}
        mod={user.mod}
        tableForm={tableForm}
      />
    ));
  };

  // Renders Pending Table
  const pendingMap = () => {
    return list.map((item) => (
      <TableItemPending
        item={item}
        key={item.id}
        handleDescription={handleDescription}
        handleEdit={handleEdit}
        mod={user.mod}
        tableForm={tableForm}
      />
    ));
  };

  const mapRender = () => {
    switch (tableForm) {
      case "dashboard":
        return dashMap();
      case "pending":
        return pendingMap();
      default:
        return dashMap();
    }
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
          tableForm={tableForm}
        />
      ) : null}
      {editOpen ? (
        <EditModal
          modalOpen={editOpen}
          setModalOpen={setEditOpen}
          data={modalData}
          tableForm={tableForm}
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
            {user.mod && tableForm === "pending" ? <th>Select</th> : null}
          </tr>
        </thead>
        <tbody>{list ? mapRender() : null}</tbody>
      </table>
    </>
  );
};

export default Table;
