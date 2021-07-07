import React, { FC } from 'react';

import { Container } from './styles';
import { ButtonProps } from './interface';

const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" { ...rest }>
    {children}
  </Container>
);

export default Button;
