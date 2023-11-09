import React from "react";
import { Link } from "react-router-dom";
import {
  NavContainer,
  Logo,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "./NavbarStyle";

const Navbar = () => {

  const menuClickHandler = (menuName) => {
    console.log(menuName);
  };

  return (
    <NavContainer>
      <ul>
        <li>
          <Logo to="/" onClick={() => menuClickHandler("LOGO")}>LOGO</Logo>
        </li>
        <li>
          <Dropdown>
            <a onClick={() => menuClickHandler("장애인")}>장애인</a>
            <DropdownMenu>
              <DropdownItem as={Link} to="/facility/외부신체기능장애">외부신체기능장애</DropdownItem>
              <DropdownItem as={Link} to="/facility/발달장애">발달장애</DropdownItem>
              <DropdownItem as={Link} to="/facility/내부기관장애">내부기관장애</DropdownItem>
              <DropdownItem as={Link} to="/facility/정신장애">정신장애</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <a onClick={() => menuClickHandler("노인")}>노인</a>
            <DropdownMenu>
              <DropdownItem as={Link} to="/facility/노인복지시설">노인복지시설</DropdownItem>
              <DropdownItem as={Link} to="/facility/요양/시설">요양/시설</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
        <Dropdown>
            <a onClick={() => menuClickHandler("아동/청소년")}>아동/청소년</a>
            <DropdownMenu>
              <DropdownItem as={Link} to="/facility/아동">아동</DropdownItem>
              <DropdownItem as={Link} to="/facility/청소년">청소년</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
