import React, { FC, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={ 20 } />}
      <input ref={ inputRef } { ...rest } />
    </Container>
  );
};

export default Input;
