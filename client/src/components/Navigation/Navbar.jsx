import React, { useState } from "react";

import "../../css/navigation/ToolBar.css";

import ToolBar from "./ToolBar";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
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
