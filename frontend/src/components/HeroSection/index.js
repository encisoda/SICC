import React, { useState } from 'react'
import elvideo from '../../videos/este.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={elvideo} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Gestión de proveedores </HeroH1>
                <HeroP>
                    Aplicación de gestión de contratistas
                    <br />
                    Equipo de analistas especializados
                    <br />
                    Servicios de asesoramiento
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Iniciar Sesión {hover ? <ArrowForward /> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
