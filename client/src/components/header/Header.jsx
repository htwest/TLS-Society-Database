import WhiteLogo from "../../images/WhiteLogo.png";
import "../../css/header/Header.css";

const Header = () => {
  return (
    <div className="header-box">
      <img src={WhiteLogo} alt="logo" />
    </div>
  );
};

export default Header;
