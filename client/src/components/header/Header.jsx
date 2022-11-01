import Logo from "../../images/logo.png";
import Name from "../../images/name-logo.png";
import MarqueeBox from "./MarqueeBox";
import "../../css/header/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-box">
        <img src={Logo} alt="logo" />
        <div id="divider" />
        <img src={Name} alt="name" />
      </div>
      <MarqueeBox />
    </>
  );
};

export default Header;
