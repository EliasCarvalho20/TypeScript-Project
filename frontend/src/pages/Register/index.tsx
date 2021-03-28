import React, { FC, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import { DataValidation } from './interface';
import registerValidation from './validation';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Register: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      await registerValidation(data);
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />

        <Content>
          <img src={ logoImg } alt="Logo" />

          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Faça seu cadastro</h1>

            <Input name="name" placeholder="Nome" icon={ FiUser } />
            <Input name="email" placeholder="Email" icon={ FiMail } />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={ FiLock }
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <a href="/">
            <FiArrowLeft />
            Voltar para Login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default Register;
