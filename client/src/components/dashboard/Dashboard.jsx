import React, { useContext } from "react";
import "../../css/dashboard/dashboard.css";

// Context
import UserContext from "../../utils/UserContext";

// Components
import UserBox from "./UserBox";
import Navbar from "../navigation/Navbar";
import ReduxTest from "../test/ReduxTest";

const Dashboard = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      {user ? <Navbar /> : null}
      {/* <ReduxTest /> */}
      {user ? <UserBox userData={user} /> : null}
    </div>
  );
};

export default Dashboard;
