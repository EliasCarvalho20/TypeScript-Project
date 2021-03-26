import React, { FC } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container, Content, Form, Background,
} from './styles';
import logoImg from '../../assets/logo.svg';

const Login: FC = () => (
  <>
    <Container>
      <Content>
        <img src={ logoImg } alt="Logo" />

        <Form>
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

export default Login;
