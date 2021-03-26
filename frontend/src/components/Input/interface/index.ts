import { InputHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}
