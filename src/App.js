import React, { Component } from 'react';

import {
  Route, 
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import './App.scss';

import Home from './containers/Home/Home'
import Appointments from './containers/Appointments/Appointments'
import Staffs from './containers/Staff/Staffs'
import Clients from './containers/Clients/Clients'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/appointments' component={Appointments} />
            <Route path='/employees' component={Staffs} />
            <Route path='/clients' component={Clients} />
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default withRouter(connect()(App))