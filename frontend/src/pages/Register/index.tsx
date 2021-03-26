import React, { FC } from 'react';
import {
  FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const Register: FC = () => (
  <>
    <Container>
      <Background />

      <Content>
        <img src={ logoImg } alt="Logo" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" placeholder="Nome" icon={ FiUser } />
          <Input name="email" placeholder="E-mail" icon={ FiMail } />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={ FiLock }
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  </>
);

export default Register;
