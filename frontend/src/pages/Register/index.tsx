import React, { FC, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FiArrowLeft, FiMail, FiUser, FiLock,
} from 'react-icons/fi';

import { ValidationError } from 'yup';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { DataValidation } from './interface';
import registerValidation from './validation';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, AnimationContainer, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const Register: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: DataValidation) => {
    try {
      formRef.current?.setErrors({});

      await registerValidation(data);

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Tudo certo! Você já pode fazer o login',
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        const error = getValidationErrors(err);
        formRef.current?.setErrors(error);

        // eslint-disable-next-line no-useless-return
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer o seu cadastro, tente novamente!',
      });
    }
  }, [history, addToast]);

  return (
    <>
      <Container>
        <Background />
        <AnimationContainer>
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

          <Link to="/">
            <FiArrowLeft />
            Voltar para Login
          </Link>
        </AnimationContainer>
      </Container>
    </>
  );
};

export default Register;
