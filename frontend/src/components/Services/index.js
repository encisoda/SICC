import React from 'react'
import { ServicesContainer, 
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP} from './ServicesElements'
import Icon1 from '../../images/img.svg';
import Icon2 from '../../images/img.svg';
import Icon3 from '../../images/img.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expesnes</ServicesH2>
                    <ServicesP>nas texto</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce Expesnes</ServicesH2>
                    <ServicesP>nas texto</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce Expesnes</ServicesH2>
                    <ServicesP>mas texto</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
