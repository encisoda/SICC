import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavbarTable from '../components/Table/NavbarTable';
import TableProveedor from '../components/TableProveedor/tabla';

const TableProveedorPage = () => {
    return (
        <>
            <Router>
                <NavbarTable />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
            <Table />
        </>
    );
};

export default TableProveedorPage;
