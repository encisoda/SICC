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
import TokenProvider from './context/TokenContext';
import Empleado from './components/Empleado/tabla';
import Vehiculo from './components/Vehiculo/tabla';
import agregarVehiculo from './components/agregarVehiculo/tabla';
import tablaDocumentos from './components/tablaDocumentos/tabla';
import usuarios from './components/usuarios/tabla';
function App() {
  return (
    <TokenProvider>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sigin" component={SigninPage} exact />
        <Route path="/tabla" component={Table} exact />
        <Route path="/tablaAdmin" component={TableDosAdmin} exact />
        <Route path="/tablaProveedor" component={TableProveedor} exact />
        <Route path="/tablaControl" component={TablaControl} exact />
        <Route path="/tablaFullAdmin" component={TablaFullAdmin} exact />
        <Route path="/empleado" component={Empleado} exact />
        <Route path="/vehiculo" component={Vehiculo} exact />
        <Route path="/addVehiculo" component={agregarVehiculo} exact />
        <Route path="/tablaDocumentos" component={tablaDocumentos} exact />
        <Route path="/users" component={usuarios} exact />
        

        
      </Switch>
    </Router>
    </TokenProvider>
  );
}

export default App;
