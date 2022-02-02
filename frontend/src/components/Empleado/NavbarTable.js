import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';


function NavbarTable() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">

                 
                    {/* <p className="nombre">@admin</p> */}
                    <Link color="danger" to='/home' className="salir">
                        <BiIcons.BiExit />
                    </Link>

                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

               
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavbarTable;