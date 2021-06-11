import React, { FC, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import { DataValidation } from './interface';
import loginValidation from './validation';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, AnimationContainer, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const Login: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { data: { user }, signIn } = useAuth();

  const handleSubmit = useCallback(async ({ email, password }: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      await loginValidation({ email, password });

      await signIn({ email, password });
    } catch (err) {
      const error = getValidationErrors(err);

      formRef.current?.setErrors(error);

      // eslint-disable-next-line no-useless-return
      return;
    }
  }, [signIn]);

  return (
    <>
      <Container>
        <AnimationContainer>
          <img src={ logoImg } alt="Logo" />

          <Form ref={ formRef } onSubmit={ handleSubmit }>
            <h1>Faça seu login</h1>

            <Input name="email" placeholder="E-mail" icon={ FiMail } />
            <Input name="password" type="password" placeholder="Senha" icon={ FiLock } />

            <Button type="submit">Entrar</Button>

            <a href="a">Esqueci minha senha</a>
          </Form>

          <Link to="/register">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>

        <Background />
      </Container>
    </>
  );
};

export default Login;
