import Marquee from "react-fast-marquee";
import "../../css/header/Marquee.css";

// Images
import background from "../../images/marquee-background.png";
import Technology from "./marquee-items/Technology";
import Security from "./marquee-items/Security";
import Policy from "./marquee-items/Policy";
import Government from "./marquee-items/Government";
import ECommerce from "./marquee-items/ECommerce";
import AI from "./marquee-items/AI";

const MarqueeBox = () => {
  return (
    <div className="marquee-container">
      <Marquee className="overhead-marquee" gradient={false}>
        <Technology />
        <ECommerce />
        <Policy />
        <Security />
        <Government />
        <AI />
      </Marquee>
      <Marquee
        className="background-marquee"
        gradient={false}
        direction="right"
        speed={10}
      >
        <img
          id="marquee-background-img"
          src={background}
          alt="background"
        ></img>
      </Marquee>
    </div>
  );
};

export default MarqueeBox;
