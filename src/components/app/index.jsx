import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from '../splash';
import Login from '../login';

import loginReducer from '../login/login.reducer';

const store = createStore(combineReducers({
  loginReducer,
}));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Splash} />
        <Route path="/login" component={Login} />
      </Router>
    </Provider>
  );
};

export default App;