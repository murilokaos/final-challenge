import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import * as Yup from 'yup';
import UserActions from 'store/ducks/user';

import {
  Container, Form, Brand, Input, Button, Link, Error,
} from 'pages/Sign/styles';

const SignIn = (props) => {
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no minimo 6 digitos'),
  });

  function handleSubmit({ email, password }) {
    const { userLoginRequest } = props;
    userLoginRequest(email, password);
  }

  return (
    <Container>
      <Brand />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <Button>{!loading ? 'Entrar' : 'Carregando...'}</Button>
      </Form>
      <Error>{!!error && error}</Error>
      <Link to="/register">Criar conta grátis</Link>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
