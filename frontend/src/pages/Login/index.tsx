import React, { FC, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Login: FC = () => {
  const handleSubmit = useCallback((data) => console.log(data), []);

  return (
    <>
      <Container>
        <Content>
          <img src={ logoImg } alt="Logo" />

          <Form onSubmit={ handleSubmit }>
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
