import React, { useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  Error,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmationRef = useRef();

  const user = useSelector(state => state.user.user);
  const loading = useSelector(state => state.user.loading);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Você deve fornecer um nome')
      .min(3, 'O nome deve ter no mínimo 4 dígitos'),
    oldPassword: Yup.string()
      .notRequired()
      .test('oldPassword', 'A senha antiga tem no mínimo 6 dígitos', value => {
        if (value) {
          const test = Yup.string().min(6);
          return test.isValidSync(value);
        }
        return true;
      }),
    newPassword: Yup.string().when('oldPassword', {
      is: password => password.length > 0,
      then: Yup.string()
        .required('Forneça uma nova senha!')
        .min(6, 'A nova senha deve ter no mínimo 6 dígitos'),
      else: Yup.string().notRequired(),
    }),
    confirmation: Yup.string().when('newPassword', {
      is: password => password.length > 0,
      then: Yup.string()
        .required('A confirmação de senha é obrigatória')
        .oneOf([Yup.ref('newPassword'), null], 'As senhas devem ser iguais'),
      else: Yup.string().notRequired(),
    }),
  });

  async function handleUpdate(data) {
    const newData = {};
    const isValid = await schema.isValid({
      name: data.name,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      confirmation: data.confirmation,
    });
    if (isValid) {
      if (data.oldPassword.length >= 6) {
        newData.oldPassword = data.oldPassword;
        newData.password = data.newPassword;
        newData.password_confirmation = data.confirmation;
      }

      if (data.name !== user.name) {
        newData.name = data.name;
      }
    }

    if (Object.keys(newData).length >= 3 || newData.name) {
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
        <Formik
          validationSchema={schema}
          initialValues={{
            name: user.name,
            oldPassword: '',
            newPassword: '',
            confirmation: '',
          }}
          onSubmit={(values, actions) => {
            handleUpdate(values);
            actions.setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, isValid, errors }) => (
            <Form>
              <FormInput
                icon="person"
                placeholder="Digite seu nome"
                autoCorrect={false}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => oldPasswordRef.current.focus()}
                value={values.name}
                onChangeText={handleChange('name')}
                blurOnSubmit={false}
              />
              {errors.name && <Error>{errors.name}</Error>}
              <FormInput
                icon="mail-outline"
                value={user.email}
                editable={false}
              />
              <Spacer />
              <FormInput
                icon="lock-outline"
                secureTextEntry
                textContentType="password"
                ref={oldPasswordRef}
                returnKeyType="next"
                onSubmitEditing={() => newPasswordRef.current.focus()}
                value={values.oldPassword}
                isValid
                onChangeText={handleChange('oldPassword')}
                placeholder="Digite a senha atual"
                blurOnSubmit={false}
              />
              {errors.oldPassword && <Error>{errors.oldPassword}</Error>}
              <FormInput
                icon="lock-outline"
                secureTextEntry
                ref={newPasswordRef}
                returnKeyType="next"
                onSubmitEditing={() => confirmationRef.current.focus()}
                value={values.newPassword}
                textContentType="newPassword"
                onChangeText={handleChange('newPassword')}
                placeholder="Digite a nova senha"
                blurOnSubmit={false}
              />
              {errors.newPassword && <Error>{errors.newPassword}</Error>}
              <FormInput
                icon="lock-outline"
                secureTextEntry
                ref={confirmationRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={values.confirmation}
                onChangeText={handleChange('confirmation')}
                placeholder="Digite a senha novamente"
              />
              {errors.confirmation && <Error>{errors.confirmation}</Error>}
              <Submit
                onPress={handleSubmit}
                disabled={!isValid}
                loading={loading}
              >
                Salvar Perfil
              </Submit>
              <Error>{JSON.stringify(isValid)}</Error>
              <Submit onPress={handleSignOut} backgroundColor={darkPrimary}>
                Sair do Meetapp
              </Submit>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default Profile;
