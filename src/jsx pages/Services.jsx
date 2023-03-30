import React from "react";
import MyCarousel from "./MyCarousel";
import "../css pages/Services.css";
// import { Carousel } from "react-bootstrap";

import Servicesbg from "../pics/serviceBg.png";

const Services = () => {
  return (
    <>
      <div
        className="S-container"
        style={{ backgroundImage: `url(${Servicesbg})` }}
      >
        <div className="S-up">
          <div className="S-head">
            <h1>SERVICES</h1>
          </div>
          <h1>The Service we provide to all the customers.</h1>
        </div>
        <div className="S-down">
          <MyCarousel />
        </div>
      </div>
    </>
  );
};

export default Services;
