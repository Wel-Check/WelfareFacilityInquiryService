import React from "react";
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
          <Logo onClick={() => menuClickHandler("LOGO")}>LOGO</Logo>
        </li>
        <li>
          <Dropdown>
            <a onClick={() => menuClickHandler("장애인")}>장애인</a>
            <DropdownMenu>
              <DropdownItem href="#">외부신체기능장애</DropdownItem>
              <DropdownItem href="#">발달장애</DropdownItem>
              <DropdownItem href="#">내부기관장애</DropdownItem>
              <DropdownItem href="#">정신장애</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <a onClick={() => menuClickHandler("노인")}>노인</a>
            <DropdownMenu>
              <DropdownItem href="#">노인복지시설</DropdownItem>
              <DropdownItem href="#">요양/시설</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
        <Dropdown>
            <a onClick={() => menuClickHandler("아동/청소년")}>아동/청소년</a>
            <DropdownMenu>
              <DropdownItem href="#">아동</DropdownItem>
              <DropdownItem href="#">청소년</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
