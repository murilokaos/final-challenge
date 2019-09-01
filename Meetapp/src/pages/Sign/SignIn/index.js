import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import UserActions from 'store/ducks/user';
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
} from '../styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.user.loading);

  function handleLogin() {
    dispatch(UserActions.userLoginRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Brand source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
            blurOnSubmit={false}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            textContentType="password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleLogin}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
          />

          <Submit onPress={handleLogin} loading={loading}>
            Entrar
          </Submit>
        </Form>
        <LinkSign onPress={() => navigation.navigate('SignUp')}>
          <LinkSignText>Criar conta gratis</LinkSignText>
        </LinkSign>
      </Container>
    </Background>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
