import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Bio } from '../data/constants';
import { MenuRounded } from '@mui/icons-material';
// import Them
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  right:0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithuButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    right:0;
    position :absolute;
    align-items:center;
    justify-content:center;
    
    }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  background: ${({ theme }) => theme.card_light + 99};
padding:12px 40px 24px 40px;
  position: absolute;
  top: 80px;
  right:0;
transition: all 0.6s ease-in-out;
transform:${({isOpen})=>
isOpen ? "translateY(0)":"translateY(-100%)"};
border-radius:  0 0 20px 20px;
box-shadow: 0 0 10px 0 rgba(0 , 0,0 ,0.2);
opacity:${({isOpen})=>(isOpen ? "100%":"0")};
z-index:${({isOpen})=> (isOpen ? "1000":"-1000")};

`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const theme  = useTheme();
  return (
    <Nav>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{ color: 'inherit' }} />
      </MobileIcon>

      <NavbarContainer>
        <NavLogo to="/">MyProfile</NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink  onClick={()=>setIsOpen(!isOpen)} href="#About">About</NavLink>
            <NavLink  onClick={()=>setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
            <NavLink  onClick={()=>setIsOpen(!isOpen)} href="#Education">Education</NavLink>
            <NavLink  onClick={()=>setIsOpen(!isOpen)} href="#Experience">Experience</NavLink>
            <GithuButton 
            href={Bio.github} 
            target="Blank" 
             style={{
              background:theme.primary , 
              color:theme.text_primary,
             }}>
            GitHub Profile
          </GithuButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithuButton href={Bio.github} target="Blank">
            GitHub Profile
          </GithuButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
