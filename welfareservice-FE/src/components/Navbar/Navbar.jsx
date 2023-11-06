import React from "react";
import {
  NavContainer,
  Logo
} from "./NavbarStyle";

const Navbar = () => {

  const menuClickHandler = (menuName) => {
    console.log(menuName);
  };

  return (
    <NavContainer>
      <ul>
        <li>
          <Logo onClick={() => menuClickHandler("LOGO")}>LOGO</Logo>
        </li>
        <li>
          <a onClick={() => menuClickHandler("장애인")}>장애인</a>
        </li>
        <li>
          <a onClick={() => menuClickHandler("노인")}>노인</a>
        </li>
        <li>
          <a onClick={() => menuClickHandler("아동/청소년")}>아동/청소년</a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
