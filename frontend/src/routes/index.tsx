import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import { Login, Register, Dashboard } from '../pages';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/register" component={ Register } />
    <Route path="/dashboard" component={ Dashboard } isPrivate />
  </Switch>
);

export default Routes;
