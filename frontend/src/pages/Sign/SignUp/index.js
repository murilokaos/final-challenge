import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container, Form, Brand, Input, Button, Link,
} from 'pages/Sign/styles';

const SignUp = () => {
  function handleSubmit() {

  }

  return (
    <Container>
      <Brand />
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha secreta" />
        <Input type="password" name="confirm_password" placeholder="Novamente a senha" />
        <Button type="submit">Criar conta</Button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SignUp);
