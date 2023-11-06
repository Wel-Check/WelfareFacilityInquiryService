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

  a:not(.logo) {
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