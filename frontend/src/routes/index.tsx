import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
