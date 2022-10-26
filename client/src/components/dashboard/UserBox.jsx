import React from "react";

// Components
import UserUnapproved from "./UserUnapproved";
import TableDock from "../table/TableDock";

const UserBox = ({ userData }) => {
  return (
    <div className="user-container">
      <div className="user-greet">
        <h2>Welcome</h2>
        <h4>{userData.f_name}</h4>
      </div>
      {userData.approved ? (
        <TableDock tableForm="dashboard" />
      ) : (
        <UserUnapproved />
      )}
    </div>
  );
};

export default UserBox;
