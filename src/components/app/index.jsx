import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from '../splash';
import Login from '../login';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Splash} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;