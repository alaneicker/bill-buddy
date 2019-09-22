import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Splash from './components/splash';
import Login from './components/login';

import loginReducer from './components/login/login.reducer';

import './assets/styles/app.scss';

export const store = createStore(combineReducers({
  loginReducer,
}));

const App = () => {
  return (
    <Provider store={store}>
      <Route path="/" exact component={Splash} />
      <Route path="/login" component={Login} />
    </Provider>
  );
};

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
