import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Splash from '../splash';

import loginReducer from '../login/login.reducer';

const store = createStore(combineReducers({
  loginReducer,
}));

const App = () => {
  return (
    <Provider store={store}>
      <Route path="/" exact component={Splash} />
    </Provider>
  );
};

export default App;