import React, { useContext } from "react";
import "../../css/dashboard/dashboard.css";

// Context
import UserContext from "../../utils/UserContext";
import TableContext from "../../utils/TableContext";

// Components
import UserBox from "./UserBox";
// import NavBox from "../navigation/NavBox";
import Navbar from "../navigation-two/Navbar";

const Dashboard = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <TableContext.Provider value="dashboard">
      <div className="dashboard-container">
        {user ? <Navbar /> : null}
        {user ? <UserBox userData={user} /> : null}
      </div>
    </TableContext.Provider>
  );
};

export default Dashboard;
