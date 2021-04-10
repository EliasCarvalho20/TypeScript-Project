import React, { FC, createContext, useCallback } from 'react';

import api from '../services/api';
import { AuthContextInterface } from './interface';

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthProvider: FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={ { name: 'Elias', signIn } }>
      {children}
    </AuthContext.Provider>
  );
};
