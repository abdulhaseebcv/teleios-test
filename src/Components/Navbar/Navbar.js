import React, { useState } from 'react'
import { Button, HeaderContainer, Logo, NavItem, NavItems, StyledLink, ToggleButton, UserNavToggle } from './NavbarStyle'
import logo from '../../assets/images/logo.png';
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <NavItems isToggled={isToggled}>
        <NavItem>
          <StyledLink to="https://teleiosdome.com/booking">Experiences</StyledLink>
        </NavItem>
        <hr />
        <NavItem>
          <StyledLink to="https://teleiosdome.com/dome">Dome</StyledLink>
        </NavItem>
        <hr />
        <NavItem>
          <StyledLink to="https://teleiosdome.com/simulators">Simulator</StyledLink>
        </NavItem>
        <hr />
        <NavItem>
          <StyledLink to="https://teleiosdome.com/events/teleios-dome-virtual-grand-prix">Event</StyledLink>
        </NavItem>
        <hr />
        <NavItem>
          <StyledLink to="https://teleiosdome.com/faq">FAQ</StyledLink>
        </NavItem>
        <hr />
        <NavItem>
          <StyledLink to="https://teleiosdome.com/contact">Contact</StyledLink>
        </NavItem>
        <hr />
      </NavItems>
      <UserNavToggle>
        <Button><StyledLink to='https://teleiosdome.com/login'><span><FaUser size={15} /></span></StyledLink>Sign In</Button>
        <ToggleButton onClick={handleToggle} isToggled={isToggled}>
          <span>{isToggled ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}</span>
        </ToggleButton>
      </UserNavToggle >
    </HeaderContainer>
  )
}

export default Navbar