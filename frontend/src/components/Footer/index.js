import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLink, FooterLinkItems,
    SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkTitle, Img
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.png';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre nosotros</FooterLinkTitle>
                            <FooterLink to="/singin">Qué es</FooterLink>
                            <FooterLink to="/singin">Como funciona</FooterLink>
                            <FooterLink to="/singin">Servicios</FooterLink>
                            <FooterLink to="/singin">Beneficios</FooterLink>
                            <FooterLink to="/singin">Iniciar sesion</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre nosotros</FooterLinkTitle>
                            <FooterLink to="/singin">Qué es</FooterLink>
                            <FooterLink to="/singin">Como funciona</FooterLink>
                            <FooterLink to="/singin">Servicios</FooterLink>
                            <FooterLink to="/singin">Beneficios</FooterLink>
                            <FooterLink to="/singin">Iniciar sesion</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre nosotros</FooterLinkTitle>
                            <FooterLink to="/singin">Qué es</FooterLink>
                            <FooterLink to="/singin">Como funciona</FooterLink>
                            <FooterLink to="/singin">Servicios</FooterLink>
                            <FooterLink to="/singin">Beneficios</FooterLink>
                            <FooterLink to="/singin">Iniciar sesion</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Redes sociales</FooterLinkTitle>
                            <FooterLink to="/singin">Instagram</FooterLink>
                            <FooterLink to="/singin">Facebook</FooterLink>
                            <FooterLink to="/singin">Youtube</FooterLink>
                            <FooterLink to="/singin">Twiiter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                <Img src={logo} />
                                SICC
                            </SocialLogo>
                            <WebsiteRights>Sistema integral de control de contratistas {new Date().getFullYear()}</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
