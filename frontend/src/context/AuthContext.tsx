import React, {
  FC, createContext, useCallback, useState,
} from 'react';

import api from '../services/api';
import { AuthContextInterface, UserFromApi } from './interface';

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthProvider: FC = ({ children }) => {
  const [data, setData] = useState<UserFromApi>(() => {
    const user = localStorage.getItem('@TSProject:user');

    if (user) return { user: JSON.parse(user) };

    return {} as UserFromApi;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { user } = response.data;

    localStorage.setItem('@TSProject', JSON.stringify(user));

    setData({ user });
  }, []);

  return (
    <AuthContext.Provider value={ { data, signIn } }>
      {children}
    </AuthContext.Provider>
  );
};
