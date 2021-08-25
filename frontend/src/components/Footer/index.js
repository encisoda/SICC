import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLink, FooterLinkItems,
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

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
                            {/* <FooterLinkTitle> About us </FooterLinkTitle> */}
                                <FooterLink to="/singin">About Us</FooterLink>
                                <FooterLink to="/singin">About Us</FooterLink>
                                <FooterLink to="/singin">About Us</FooterLink>
                                <FooterLink to="/singin">About Us</FooterLink>
                                <FooterLink to="/singin">About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle> About us </FooterLinkTitle> */}
                                <FooterLink to="/singin">About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle> About us </FooterLinkTitle> */}
                                <FooterLink to="/singin">About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Sicc
                            </SocialLogo>
                            <WebsiteRights>Sicc{new Date().getFullYear()}</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                    <FaInstagram/>
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
