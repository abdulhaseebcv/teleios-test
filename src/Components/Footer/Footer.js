import React from 'react'
import logo from '../../assets/images/logo.png';
import { Logo } from '../Navbar/NavbarStyle';
import { FooterContainer } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="" />
      <p>&copy;  2024 Teleios Global FZ-LLC.</p>
    </FooterContainer>
  )
}

export default Footer