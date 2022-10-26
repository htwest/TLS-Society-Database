import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileImport,
  faCircleQuestion,
  faEnvelope,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// Context
import UserContext from "../../utils/UserContext";

// Hooks
import postLogout from "../../api/postLogout";
import { useNavigate } from "react-router";

const SideBar = ({ sidebar }) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await postLogout().then((res) => {
      setUser();
      window.localStorage.removeItem("user");
      navigate("/");
    });
  };

  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li onClick={() => navigate("/dashboard")}>
        <FontAwesomeIcon icon={faHouse} className="ri-home-line" />
        Dashboard
      </li>
      {user.mod ? (
        <li onClick={() => navigate("/pending")}>
          <FontAwesomeIcon icon={faFileImport} className="ri-pending-line" />
          Pending
        </li>
      ) : null}
      <li>
        <FontAwesomeIcon icon={faEnvelope} className="ri-contact-line" />
        Contact
      </li>
      <li>
        <FontAwesomeIcon icon={faCircleQuestion} className="ri-about-line" />
        About Us
      </li>
      <li onClick={() => handleLogout()}>
        <FontAwesomeIcon icon={faRightFromBracket} className="ri-logout-line" />
        Log Out
      </li>
    </div>
  );
};

export default SideBar;
