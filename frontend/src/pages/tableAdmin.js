import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavbarTable from '../components/Table/NavbarTable';
import TableDosAdmin from '../components/TableDosAdmin/tabla';

const TableAdminPage = () => {
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

export default TableAdminPage;


