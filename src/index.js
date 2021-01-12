import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { teamsTheme, Provider } from '@fluentui/react-northstar';

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
