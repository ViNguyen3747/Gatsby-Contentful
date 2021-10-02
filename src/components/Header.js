import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import * as palette from "../styles/Variables";

export const Nav = styled.nav`
  background: ${palette.DARK};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100vw;
`;

export const NavLogo = styled(Link)`
  color: ${palette.LIGHT};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5 rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.4s ease-out;
  &:hover {
    color: ${palette.LIGHT_GREEN};
  }
`;

const Header = ({ title, link }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to={`${link}`}>{title}</NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
