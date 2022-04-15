import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleNav = (route) => {
    setActiveNav(route);
  };

  const navClass = (route) => (activeNav === route ? "active" : "");

  return (
    <nav>
      <a href="#" className={navClass("#")} onClick={() => handleNav("#")}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={navClass("#about")}
        onClick={() => handleNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={navClass("#experience")}
        onClick={() => handleNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={navClass("#services")}
        onClick={() => handleNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={navClass("#contact")}
        onClick={() => handleNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
