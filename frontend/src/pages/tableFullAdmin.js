import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavbarTable from '../components/Table/NavbarTable';
import TablaFullAdmin from '../components/TablaFullAdmin/tabla';

const TableFullAdminPage = () => {
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

export default TableFullAdminPage;


