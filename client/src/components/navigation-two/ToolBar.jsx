import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToolBar = ({ openSideBar }) => {
  return (
    <div className="tool-bar" onClick={() => openSideBar()}>
      <div className="burger">
        <FontAwesomeIcon icon={faBars} className="ri-menu-line" />
      </div>
      <div className="title"></div>
    </div>
  );
};

export default ToolBar;
