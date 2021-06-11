import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { AuthProvider } from './hooks/auth';

const App: FC = () => (
  <>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
