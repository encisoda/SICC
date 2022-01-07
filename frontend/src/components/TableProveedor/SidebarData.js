import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Documentacion',
        path: '/tablaProveedor',
        icon: <MdIcons.MdAttachFile/>,
        cName: 'nav-text'
    },
    {
        title: 'Empleados',
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

]