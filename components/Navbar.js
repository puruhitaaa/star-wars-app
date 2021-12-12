import styled from 'styled-components';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink title="NEWS + BLOG" />
        <NavbarLink title="VIDEO" />
        <NavbarLink title="FILM" />
        <NavbarLink title="SERIES" />
        <NavbarLink title="INTERACTIVE" />
        <NavbarLink title="DATABANK" />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 135px;
  right: 0;
  left: 0;
  z-index: 999;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #343434;
  background-color: black;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
`;

const NavbarLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
