import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Img } from './NavbarElements';
import { Link as LinkR } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Img src={logo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Qué es</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Como funciona</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Beneficios</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>

                    </NavMenu>
                </NavbarContainer>
            </Nav>


        </>
    )
}

export default Navbar;
