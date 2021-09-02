import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignIn from './components/Signin';
import Table from './components/Table/tabla';
import TableDosAdmin from './components/TableDosAdmin/tabla';
import TableProveedor from './components/TableProveedor/tabla';
import TablaControl from './components/TablaControl/tabla';
import TablaFullAdmin from './components/TablaFullAdmin/tabla';
import AddForm from './components/TableDosAdmin/AddForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sigin" component={SigninPage} exact />
        <Route path="/tabla" component={Table} exact />
        <Route path="/tablaAdmin" component={TableDosAdmin} exact />
        <Route path="/tablaProveedor" component={TableProveedor} exact />
        <Route path="/tablaControl" component={TablaControl} exact />
        <Route path="/tablaFullAdmin" component={TablaFullAdmin} exact />
        <SignIn />
        <Table />
      </Switch>
    </Router>
  );
}

export default App;
