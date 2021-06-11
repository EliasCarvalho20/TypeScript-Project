import React, { FC } from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { RouterProps } from './interface';

const Route: FC<RouterProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { data: { user } } = useAuth();

  return (
    <ReactDOMRoute
      { ...rest }
      render={ ({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={
          {
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location },
          }
        }
        />
      )) }
    />
  );
};

export default Route;
