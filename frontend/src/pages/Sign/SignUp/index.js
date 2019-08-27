import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import UserActions from 'store/ducks/user';

import {
  Container, Form, Brand, Input, Button, Link,
} from 'pages/Sign/styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string()
      .required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos').required('A senha é obrigatória'),
    confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais').required('A confirmação de senha é obrigatória'),
  });

  function handleSubmit({
    name, email, password, confirmation,
  }) {
    dispatch(UserActions.userRegisterRequest(name, email, password, confirmation));
  }

  return (
    <Container>
      <Brand />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha secreta" />
        <Input type="password" name="confirmation" placeholder="Novamente a senha" />
        <Button type="submit">Criar conta</Button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </Container>
  );
};

export default SignUp;
