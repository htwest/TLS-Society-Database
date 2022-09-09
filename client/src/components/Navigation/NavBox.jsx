import "../../css/dashboard/navigation/Navbar.css";

import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";

import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const NavBox = () => {
  return (
    <Navbar>
      <NavItem icon={<ProfileIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

export default NavBox;
