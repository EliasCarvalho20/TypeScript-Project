import React, { FC } from 'react';

import { Container } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    { Icon && <Icon size={ 20 } />}
    <input { ...rest } />
  </Container>
);

export default Input;
