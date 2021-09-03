import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: 'Documentacion',
        path: '/',
        icon: <MdIcons.MdAttachFile/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear proveedor',
        path: '/home',
        icon: <FaIcons.FaUserCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear persona',
        path: '/proveedores',
        icon: <FaIcons.FaUserPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear vehiculo',
        path: '/tabla',
        icon: <AiIcons.AiFillCar/>,
        cName: 'nav-text'
    },
    {
        title: 'Crear auditoria',
        path: '/tabla',
        icon: <AiIcons.AiOutlineAudit/>,
        cName: 'nav-text'
    },
 ]