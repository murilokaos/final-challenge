import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container, Form, Brand, Input, Button, Link,
} from 'pages/Sign/styles';

const SignIn = () => (
  <Container>
    <Brand />
    <Form>
      <Input type="email" name="email" placeholder="Digite seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <Button>Entrar</Button>
    </Form>
    <Link to="/register">Criar conta grátis</Link>
  </Container>
);

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SignIn);
