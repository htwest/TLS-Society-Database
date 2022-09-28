// import WhiteLogo from "../../images/WhiteLogo.png";
import Logo from "../../images/Logo_V3.png";
import Name from "../../images/nameLogo.png";
import "../../css/header/Header.css";

const Header = () => {
  return (
    <div className="header-box">
      <img src={Logo} alt="logo" />
      <div id="divider" />
      <img src={Name} alt="name" />
    </div>
  );
};

export default Header;
