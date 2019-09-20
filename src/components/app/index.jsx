import React from 'react';
import { Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Splash from '../splash';
import Login from '../login';

import loginReducer from '../login/login.reducer';

const store = createStore(combineReducers({
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

export default App;