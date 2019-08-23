import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from 'pages/Sign/SignIn';
import SignUp from 'pages/Sign/SignUp';
import Dashboard from 'pages/Dashboard';
import FormMeetup from 'pages/FormMeetup';
import Meetup from 'pages/Meetup';
import PrivateRoute from './privateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/meetup/:id/preview" component={Meetup} />
      <PrivateRoute path="/meetup" component={FormMeetup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
