import React, { useState, useEffect, useRef } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from 'store/ducks/user';
import Header from 'components/Header';
import { darkPrimary } from 'services/utils/colors';
import {
  Background,
  Container,
  Form,
  FormInput,
  Submit,
  Spacer,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmationPasswordRef = useRef();

  const user = useSelector(state => state.user.user);
  const loading = useSelector(state => state.user.loading);

  const [name, setName] = useState(user.name);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setNewPassword('');
    setConfirmationPassword('');
  }, [user]);

  function handleUpdate() {
    const newData = {};
    if (oldPassword && oldPassword.length >= 6) {
      newData.oldPassword = oldPassword;
      newData.password = newPassword;
      newData.password_confirmation = confirmationPassword;
    }

    if (name !== user.name) {
      newData.name = name;
    }

    if (Object.keys(newData).length > 0) {
      dispatch(UserActions.userEditProfileRequest(user.id, newData));
    }
  }

  function handleSignOut() {
    dispatch(UserActions.userLogout());
  }

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="person"
            placeholder="Digite seu nome"
            autoCorrect={false}
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={name}
            onChangeText={setName}
            blurOnSubmit={false}
          />
          <FormInput icon="mail-outline" value={user.email} editable={false} />
          <Spacer />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            textContentType="password"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => newPasswordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
            placeholder="Digite a senha atual"
            blurOnSubmit={false}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={newPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmationPasswordRef.current.focus()}
            value={newPassword}
            textContentType="newPassword"
            onChangeText={setNewPassword}
            placeholder="Digite a nova senha"
            blurOnSubmit={false}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={confirmationPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleUpdate}
            value={confirmationPassword}
            onChangeText={setConfirmationPassword}
            placeholder="Digite a senha novamente"
          />

          <Submit onPress={handleUpdate} loading={loading}>
            Salvar Perfil
          </Submit>
          <Submit onPress={handleSignOut} backgroundColor={darkPrimary}>
            Sair do Meetapp
          </Submit>
        </Form>
      </Container>
    </Background>
  );
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default Profile;
