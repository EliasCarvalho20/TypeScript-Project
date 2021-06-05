import React, { FC } from 'react';
import { useTransition } from 'react-spring';

import Toast from './components/Toast';
import { Container } from './style';
import { ToastInterface } from './interface';

const ToastContainer: FC<ToastInterface> = ({ messages }) => {
  const messageWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '-0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messageWithTransition.map(({ key, item, props }) => (
        <Toast
          key={ key }
          message={ item }
          style={ props }
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
