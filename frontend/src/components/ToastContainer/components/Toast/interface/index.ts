import { ToastMessage } from '../../../../../hooks/interface';

export interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

export interface ToastProps {
  message: ToastMessage;
  style: object;
}
