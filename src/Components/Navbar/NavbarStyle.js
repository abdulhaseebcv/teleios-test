import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    background-color: rgb(26, 12, 40);
    padding: 0 2%;
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: fixed;
    z-index: 999;
`;

export const UserNavToggle = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1200px) {
      width: 50%;
}
`;


export const Logo = styled.img`
    max-width: 200px;
    max-height: 40px;
    cursor: pointer;
    @media (max-width:850px) {
      max-height: 25px;
    }
`;

export const NavItems = styled.ul`
display: flex;
  flex-grow: 1;
  justify-content: center;
  list-style-type: none;
  gap: 2.5%;

  hr{
    display: none;
  }

  @media (max-width: 1200px) {
        flex-direction: column; 
        display: ${({ isToggled }) => (isToggled ? 'flex' : 'none')};
        gap: 8px;
        width: 50%;
        height: 100vh;
        background-color: rgb(26, 12, 40);;
        position: absolute;
        right: 0;
        top: 62px;
        padding: 3% 0 0 3%;
        justify-content: flex-start;

        hr{
          display: block;
          width: 8%;
          height: 2px;
          background: #ffffff;
          margin-bottom: 2%;
        }
    }
`;

export const NavItem = styled.li`
  padding-top: .25rem;
  &::after {
    color: #fff;
    content: "/";
    font-size: 14px;
    font-weight: 100;
    padding: 8px 0 0 9px;
    position: absolute;
}

  @media (max-width: 1200px) {
   &::after{
    content:none;
   }
  }
`;

export const StyledLink = styled(Link)`
font-family: "Syncopate", sans-serif !important; 
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-size: clamp(8px,1.07vw,10px);
    letter-spacing: 2px;
    line-height: 20px;
    font-weight: 600;
    transition: transform .2s ease;

    @media (max-width: 1200px) {
      padding-bottom: 1.5%;
   }
`;

export const Button = styled.button`
  background-color: rgb(152, 0, 238);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 8px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  gap: 10px;

  span{
    margin-top: 2px;
    display: flex;
    align-items: center;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  display: none;

  @media (max-width:1200px){
    display: block;
    padding-right: 1%;
  }
`;
