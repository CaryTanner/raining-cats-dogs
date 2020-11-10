import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { themeColors } from './themes/themeColors';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <ThemeProvider theme={themeColors}>
    <App />
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

