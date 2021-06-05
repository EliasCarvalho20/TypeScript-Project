import React, {
  FC, createContext, useContext, useCallback, useState,
} from 'react';
import { uuid } from 'uuidv4';

import Toast from '../components/ToastContainer';
import { ToastContextData, ToastMessage } from './interface';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: FC = ({ children }) => {
  const [messages, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessage((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessage((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={ { addToast, removeToast } }>
      {children}
      <Toast messages={ messages } />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}

export { ToastProvider, useToast };
