import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </React.StrictMode >
  </Provider>,
  document.getElementById('root')
);