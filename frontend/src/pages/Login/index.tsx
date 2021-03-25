import React, { FC } from 'react';
import { FiLogIn } from 'react-icons/fi';

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

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

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
