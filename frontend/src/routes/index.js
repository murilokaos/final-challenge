import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from 'pages/Sign/SignIn';
import SignUp from 'pages/Sign/SignUp';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import FormMeetup from 'pages/FormMeetup';
import Meetup from 'pages/Meetup';
import PrivateRoute from './privateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/meetup/:id/preview" component={Meetup} />
      <PrivateRoute path="/meetup" component={FormMeetup} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route exact path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
