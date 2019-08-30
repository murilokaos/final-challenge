import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import UserActions from 'store/ducks/user';
import Logo from 'assets/img/logo.png';
import {
  Background,
  Container,
  Brand,
  Form,
  FormInput,
  Submit,
  LinkSign,
  LinkSignText,
} from '../styles';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmationRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const loading = useSelector(state => state.user.loading);

  function handleRegister() {
    if (name && email && password && confirmation) {
      dispatch(
        UserActions.userRegisterRequest(name, email, password, confirmation)
      );
    }
  }

  return (
    <Background>
      <Container>
        <Brand source={Logo} />
        <Form>
          <FormInput
            icon="person"
            autoCorrect={false}
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
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
            returnKeyType="next"
            onSubmitEditing={() => confirmationRef.current.focus()}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={confirmationRef}
            returnKeyType="send"
            onSubmitEditing={handleRegister}
            value={confirmation}
            onChangeText={setConfirmation}
            placeholder="Digite a senha novamente"
          />

          <Submit onPress={handleRegister} loading={loading}>
            Cadastrar
          </Submit>
        </Form>
        <LinkSign onPress={() => navigation.navigate('SignIn')}>
          <LinkSignText>Já tenho conta</LinkSignText>
        </LinkSign>
      </Container>
    </Background>
  );
};

export default SignUp;
