import React from "react";
import { Link } from "react-router-dom";
import {
  NavContainer,
  Logo,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Logo to="/">LOGO</Logo>
        </li>
        <li>
            <Link to="/facility/거주시설">거주시설</Link>
        </li>
        <li>
            <Link to="/facility/재활시설">재활시설</Link>
        </li>
        <li>
            <Link to="/facility/보호시설">보호시설</Link>
        </li>
        <li>
            <Link to="/facility/기타시설">기타시설</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
