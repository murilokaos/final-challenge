import React from 'react';
import { Switch } from 'react-router-dom';


import SignIn from 'pages/Sign/SignIn';
import SignUp from 'pages/Sign/SignUp';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import FormMeetup from 'pages/FormMeetup';
import Meetup from 'pages/Meetup';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route exact path="/meetup/:id/preview" component={Meetup} isPrivate />
    <Route path="/meetup" component={FormMeetup} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
