import React, {Component} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './components/Home/Home';
import Appointments from './components/Appointments/Appointments';
import Staff from './components/Staff/Staff';
import Clients from './components/Clients/Clients';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>{' '}
        </BrowserRouter>{' '}
      </div>
    );
  }
}

export default App;
