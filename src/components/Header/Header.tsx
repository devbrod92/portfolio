import React from "react";
import "./Header.css";
import Cta from "./Cta";
import Me from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kanao Tsuyuri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
