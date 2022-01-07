import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";



export const SidebarData = [
    {
        title: 'Documentacion',
        path: '/tablaDocumentos',
        icon: <MdIcons.MdAttachFile/>,
        cName: 'nav-text'
    },
    {
        title: 'Documentacion empresas',
        path: '/tablaAdmin',
        icon: <MdIcons.MdAttachFile/>,
        cName: 'nav-text'
    },
    {
        title: 'Proveedor',
        path: '/home',
        icon: <FaIcons.FaUserCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Persona',
        path: '/tabla',
        icon: <FaIcons.FaUserPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Vehiculo',
        path: '/addVehiculo',
        icon: <AiIcons.AiFillCar/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Crear auditoria',
    //     path: '/tabla',
    //     icon: <AiIcons.AiOutlineAudit/>,
    //     cName: 'nav-text'
    // },
]