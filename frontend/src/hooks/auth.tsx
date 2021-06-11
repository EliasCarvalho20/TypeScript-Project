import React, {
  FC, createContext, useCallback, useState, useContext,
} from 'react';

import api from '../services/api';
import { AuthContextInterface, UserFromApi } from './interface';

const Auth = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider: FC = ({ children }) => {
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

    localStorage.setItem('@TSProject:user', JSON.stringify(user));

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TSProject');

    setData({} as UserFromApi);
  }, []);

  return (
    <Auth.Provider value={ { data, signIn, signOut } }>
      {children}
    </Auth.Provider>
  );
};

const useAuth = (): AuthContextInterface => {
  const context = useContext(Auth);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
