import React from "react";
import "../styles/marquee.css";
// import company1 from "../img/mawuli.jpg";
import company2 from "../img/clients/cradx.png";
import company3 from "../img/clients/rise.png";
import company4 from "../img/clients/creatives-coterie.png";
import company5 from "../img/clients/233bite.svg";
import company6 from "../img/clients/djc.svg";

const MarqueeLogos = () => {
  const logos = [ company2, company3, company4, company5, company6];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={{logos}} className="marquee-logo" />
        ))}
      </div>
    </div>
  );
};

export default MarqueeLogos;