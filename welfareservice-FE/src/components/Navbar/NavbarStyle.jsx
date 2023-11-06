import styled from "styled-components";

export const NavContainer = styled.nav`
  top: 0;
  margin-top: 30px;
  z-index: 9999;
  font-size: ${(props) => props.theme.fontSize.xlarge};
  color: ${(props) => props.theme.colors.whiteColor};
  font-weight: 500;
  align-text: center;

  ul {
    display: flex;
    justify-content: space-around;
  }

  a:not(.logo):not(.dropdown-item) {
    padding: 9px 13px 5px 13px;

    &:hover {
      color: ${(props) => props.theme.colors.impactColor};
      background-color: ${(props) => props.theme.colors.whiteColor};
      border-radius: 50px;
    }
  }
`;

export const Logo = styled.a.attrs({
  className: "logo",
})`
  padding: 9px 13px 5px 13px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.impactColor};
`;

export const DropdownMenu = styled.div`
  width: 212px;
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 9px;
  box-shadow: 3px 3px 3px ${(props) => props.theme.colors.blackColor};
  background-color: ${(props) => props.theme.colors.impactColor};
  color: ${(props) => props.theme.colors.whiteColor};
`;

export const DropdownItem = styled.a.attrs({
  className: "dropdown-item",
})`
  font-size: ${(props) => props.theme.fontSize.large};
  display: flex;
  width: fit-content;
  margin: 20px auto;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;

  &:hover ${DropdownMenu} {
    display: block;
  }
`;