import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavbarTable from '../components/Table/NavbarTable';
import Table from '../components/Table/tabla';

const TablaPage = () => {
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

export default TablaPage;


