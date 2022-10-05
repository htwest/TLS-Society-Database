import React, { useState } from "react";

import "../../css/dashboard/navigation/ToolBar.css";

import ToolBar from "../navigation-two/ToolBar";
import SideBar from "../navigation-two/SideBar";
import Backdrop from "../navigation-two/Backdrop";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    console.log("work");
    setSidebar(!sidebar);
  };

  return (
    <div>
      <ToolBar openSideBar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <SideBar sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
