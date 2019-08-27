import React, { useState, useRef } from 'react';

import { useDispatch } from 'react-redux';

import Logo from 'assets/img/logo.png';
import {
  Background,
  Brand,
  Container,
  Form,
  FormInput,
  LinkSign,
  LinkSignText,
  Submit,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Background>
      <Container>
        <Brand source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            // onSubmitEditing={}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
          />
          <Submit>Entrar</Submit>
        </Form>
        <LinkSign onPress={() => navigation.navigate('SignUp')}>
          <LinkSignText>Criar conta gratis</LinkSignText>
        </LinkSign>
      </Container>
    </Background>
  );
};

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps
//   // mapDispatchToProps
// )(SignIn);

export default SignIn;
