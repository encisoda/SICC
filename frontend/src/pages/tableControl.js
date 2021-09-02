import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavbarTable from '../components/Table/NavbarTable';
import TablaControl from '../components/TablaControl/tabla';

const TableControlPage = () => {
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

export default TableControlPage;