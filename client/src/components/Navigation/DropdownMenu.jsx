import React, { useContext } from "react";

import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as PendingIcon } from "../../icons/pending.svg";

// Context
import UserContext from "../../utils/UserContext";

// Hooks
import postLogout from "../../api/postLogout";
import { useNavigate } from "react-router";

const DropdownMenu = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await postLogout().then((res) => {
      setUser();
      window.localStorage.removeItem("user");
      navigate("/");
    });
  };

  const navigatePending = () => {
    navigate("/pending");
  };

  const DropdownItem = (props) => {
    return (
      // eslint-disable-next-line
      <a
        href="#"
        className="menu-item"
        onClick={() => {
          props.clickEvent();
        }}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<HomeIcon />}>Dashboard</DropdownItem>
      {user.mod ? (
        <DropdownItem leftIcon={<PendingIcon />} clickEvent={navigatePending}>
          Pending
        </DropdownItem>
      ) : null}
      <DropdownItem leftIcon={<LogoutIcon />} clickEvent={handleLogout}>
        Logout
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
