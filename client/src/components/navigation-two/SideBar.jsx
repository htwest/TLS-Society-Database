import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileImport,
  faCircleQuestion,
  faEnvelope,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <FontAwesomeIcon icon={faHouse} className="ri-home-line" />
        Dashboard
      </li>
      <li>
        <FontAwesomeIcon icon={faFileImport} className="ri-pending-line" />
        Pending
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} className="ri-contact-line" />
        Contact
      </li>
      <li>
        <FontAwesomeIcon icon={faCircleQuestion} className="ri-about-line" />
        About Us
      </li>
      <li>
        <FontAwesomeIcon icon={faRightFromBracket} className="ri-logout-line" />
        Log Out
      </li>
    </div>
  );
};

export default SideBar;
