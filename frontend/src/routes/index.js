import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from 'pages/Sign/SignIn';
import SignUp from 'pages/Sign/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
