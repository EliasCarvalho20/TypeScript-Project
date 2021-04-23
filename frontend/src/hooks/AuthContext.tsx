import React, {
  FC, createContext, useCallback, useState, useContext,
} from 'react';

import api from '../services/api';
import { AuthContextInterface, UserFromApi } from './interface';

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

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

    localStorage.setItem('@TSProject', JSON.stringify(user));

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TSProject');

    setData({} as UserFromApi);
  }, []);

  return (
    <AuthContext.Provider value={ { data, signIn, signOut } }>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextInterface => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
