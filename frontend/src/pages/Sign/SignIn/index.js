import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import UserActions from 'store/ducks/user';

import {
  Container, Form, Brand, Input, Button, Link,
} from 'pages/Sign/styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 dígitos'),
  });

  function handleSubmit({ email, password }) {
    dispatch(UserActions.userLoginRequest(email, password));
  }

  return (
    <Container>
      <Brand />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Digite seu e-mail" error={error ? 1 : 0} />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
          error={error ? 1 : 0}
        />
        <Button>{!loading ? 'Entrar' : 'Carregando...'}</Button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </Container>
  );
};

export default SignIn;
