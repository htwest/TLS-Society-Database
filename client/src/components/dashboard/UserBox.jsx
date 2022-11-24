import React from "react";

// Components
import UserUnapproved from "./UserUnapproved";
import TableDock from "../table/TableDock";

const UserBox = ({ userData }) => {
  return (
    <div className="user-box">
      <div className="user-greet">
        <h1>Welcome</h1>
        <h3>{userData.f_name}</h3>
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
