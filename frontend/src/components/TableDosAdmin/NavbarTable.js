import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import AddForm from './AddForm';


function NavbarTable() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">

                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    {/* <p className="nombre">Usuario</p> */}
                    <Link color="danger" to='/home' className="salir">
                        <BiIcons.BiExit />
                    </Link>

                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={handleShow}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            Agregar
                                        </Modal.Header>
                                        <Modal.Body>
                                            <AddForm />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancelar
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>


        </>
    );
}

export default NavbarTable;