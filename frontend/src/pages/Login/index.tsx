import React, { FC, useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { DataValidation } from './interface';
import loginValidation from './validation';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Login: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      await loginValidation(data);
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <img src={ logoImg } alt="Logo" />

          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Faça seu login</h1>

            <Input name="email" placeholder="E-mail" icon={ FiMail } />
            <Input name="password" type="password" placeholder="Senha" icon={ FiLock } />

            <Button type="submit">Entrar</Button>

            <a href="a">Esqueci minha senha</a>
          </Form>

          <a href="register">
            <FiLogIn />
            Criar conta
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default Login;
