import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import SignIn from '../components/Signin'
//import SignIn from '../components/Signin'
import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGUxYTQ2MDUzNDI0OTBiMWExYzJlNCIsImlhdCI6MTY0MTk0NTY4NiwiZXhwIjoxNjQyMDMyMDg2fQ.OMEXHeujAo_RH4R9oB-Tmwwr_PX-9QBg53JReOEI3fg';

const Home = () => {

        console.log('holllllalalalalalala');
        axios.get('http://localhost:4000/api/users', {
            headers: {
                'x-access-token': `${token}` 
            }}).then(result => {
                console.log('HOLA', result)
            }).catch(console.log)
            
        
        

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />


        </>
    )
}

export default Home
