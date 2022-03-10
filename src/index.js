import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router-dom';

//сначала подключем общие стили
import './index.scss';

//затем компоненты
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
