import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'
import Codigo from '../../images/codigo.svg';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Codigo} />
                    <ServicesH2>Totalmente responsive</ServicesH2>
                    <ServicesP>vistas adaptadas a todos los dispositivos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Codigo} />
                    <ServicesH2>Estilo moderno</ServicesH2>
                    <ServicesP>de productividad moderna y de facil acceso</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Codigo} />
                    <ServicesH2>Personalizable</ServicesH2>
                    <ServicesP>adaptable a la necesidad de cada cliente</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Codigo} />
                    <ServicesH2>Sistemas de acceso web</ServicesH2>
                    <ServicesP>diseño con tecnologia confiable y segura</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
