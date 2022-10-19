import React, { useContext } from "react";
import "../../css/pending/Pending.css";

// Context
import UserContext from "../../utils/UserContext";
import TableContext from "../../utils/TableContext";

// Components
import Navbar from "../navigation-two/Navbar";
import ModBox from "./ModBox";

const Pending = () => {
  // Context
  const { user } = useContext(UserContext);

  return (
    <TableContext.Provider value="pending">
      <div className="dashboard-container">
        {user.mod ? <Navbar /> : null}
        {user.mod ? <ModBox /> : null}
      </div>
    </TableContext.Provider>
  );
};

export default Pending;
