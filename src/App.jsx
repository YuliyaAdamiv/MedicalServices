import React, {Component} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import Home from './containers/Home/Home';
import Appointments from './containers/Appointments/Appointments';

import './App.scss';

class App extends Component {
  render() {
    return (
      <ConnectedRouter>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />{' '}
              <Route path="/home" element={<Home />} />{' '}
              <Route path="/appointments" element={<Appointments />} />{' '}
            </Routes>{' '}
          </BrowserRouter>{' '}
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(App);
