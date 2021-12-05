import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from './Navbar.styled';
import image from '../../images/logo.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <img src={image} alt={'Logo'} style={{height:"70px"}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/beranda' activeStyle>
            Beranda
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            Galeri
          </NavLink>
          <NavLink to='/peminjaman' activeStyle>
            Peminjaman
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
