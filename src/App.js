import React, {Component} from 'react';

import Home from './components/Home/Home';
import Appointments from './components/Appointments/Appointments';
import Staff from './components/Staff/Staff';
import Clients from './components/Clients/Clients';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Appointments />
        <Staff />
        <Clients />
      </div>
    );
  }
}

export default App;
