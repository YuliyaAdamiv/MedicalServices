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
import Login from './components/Auth/Login'
import Admin from './components/Auth/Admin'
import Logout from './components/Auth/Logout'
import Create from './components/Create/Create'


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
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin} />
            <Route path='/logout' component={Logout} />
            <Route path='/create' component={Create} />
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default withRouter(connect()(App))