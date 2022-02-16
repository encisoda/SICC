import React, {useState} from 'react';
import {Modal} from 'react-bulma-components';
import Header from './Header';
import Button from './Button';
import ListPerson from './ListPerson';
import Form from './Form';
import SignIn from '.SignIn';
import {SignInService} from '../../services';
import Index from './index';

const SignIn = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (data) => {
        SignInService(data)
    }

    return(
        <>
        <Header title="Iniciar Sesion"/>
        <Button onClick={()=> setIsModalOpen(true)} ></Button>
        <ListPerson/>
        <Modal show={isModalOpen} onClose={()=> setIsModalOpen(false)}>
         <Modal.Card>
         <Modal.Card.Head showClose={false}>
             <Modal.Card.Title>
                 Sesion
             </Modal.Card.Title>
         </Modal.Card.Head> 
         <Modal.Card.Body>
            <Index handleSubmit={handleSubmit}/>    
         </Modal.Card.Body>   
         </Modal.Card>   
        </Modal>
        </>
    )

}