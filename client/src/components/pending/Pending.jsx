import React, { useContext } from "react";
import "../../css/pending/Pending.css";

// Context
import UserContext from "../../utils/UserContext";

// Components
import Navbar from "../navigation/Navbar";
import ModBox from "./ModBox";

const Pending = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      {user.mod ? <Navbar /> : null}
      {user.mod ? <ModBox /> : null}
    </div>
  );
};

export default Pending;
