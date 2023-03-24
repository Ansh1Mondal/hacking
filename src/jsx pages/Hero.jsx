import React from "react";
import "../css pages/Hero.css";

function hero(props) {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">LOGO</div>
          <div className="nav-contents">
            <div className="con-home">HOME</div>
            <div className="con-services">SERVICES</div>
            <div className="con-aboutUs">ABOUT US</div>
            <div className="con-Register">REGISTER</div>
            <div className="con-contactUs">CONTACT US</div>
          </div>
          <div className="nav-login">LOGIN</div>
        </div>
        <div className="Body">
          <div className="heading1">
            <h1>Grih Karya</h1>
          </div>
          <div className="heading2">
            <h2>tag line 1</h2>
          </div>
          <div className="heading3">
            <h3>tag line 2</h3>
          </div>
          <div className="Btns">
            <div className="btn">HIRE</div>
            <div className="btn">REGISTER</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
