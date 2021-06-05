import React, { FC } from 'react';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './toast';

const AppProvider:FC = ({ children }) => (
  <>
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  </>
);

export default AppProvider;
