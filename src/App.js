import React, { Component } from 'react';

import {
    Route, 
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"

import Home from './components/Home/Home';
import Appointments from './components/Appointments/Appointments';
import Staff from './components/Staff/Staff';
import Clients from './components/Clients/Clients';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/home" component={Home } />
            <Route path="/appointments" component={Appointments } />
            <Route path="/staff" component={Staff } />
            <Route path="/clients" component={Clients } />
            <Redirect from='/' to='/home'/>
          </Switch>{' '}
      {' '}
      </div>
    );
  }
}

export default withRouter(App);