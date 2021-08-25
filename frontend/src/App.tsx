import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignIn from './components/Signin';
import Table from './components/Table/tabla';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sigin" component={SigninPage} exact />
        <Route path="/tabla" component={Table} exact />
        <SignIn/>
        <Table/>
      </Switch>
    </Router>
    );
  }
  
export default App;
