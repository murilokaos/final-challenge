import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from 'store/ducks/user';
import {
  Container,
  Form,
  Input,
  Text,
  SaveProfile,
  ButtonContainer,
  MeetupIcon,
  Space,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

  const schema = Yup.object().shape({
    name: Yup.string().required('Você deve fornecer um nome'),
    oldPassword: Yup.string()
      .nullable(true)
      .notRequired(),
    newPassword: Yup.string().when('oldPassword', {
      is: (password) => password.length >= 6,
      then: Yup.string()
        .min(6, 'A nova senha deve ter no mínimo 6 dígitos')
        .required('Forneça uma nova senha!'),
      else: Yup.string()
        .nullable(true)
        .notRequired(),
    }),
    confirmation: Yup.string().when('newPassword', {
      is: (password) => password.length > 0,
      then: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'As senhas devem ser iguais')
        .required('A confirmação de senha é obrigatória'),
      else: Yup.string()
        .nullable(true)
        .notRequired(),
    }),
  });

  function handleSubmit(data) {
    const newData = {};
    if (data.oldPassword && data.oldPassword.length >= 6) {
      newData.oldPassword = data.oldPassword;
      newData.password = data.newPassword;
      newData.password_confirmation = data.confirmation;
    }

    if (data.name !== user.name) {
      newData.name = data.name;
    }

    if (Object.keys(newData).length > 0) {
      dispatch(UserActions.userEditProfileRequest(user.id, newData));
    }
  }

  return (
    <Container>
      <Form initialData={user} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu nome" error={error ? 1 : 0} />
        <Input name="email" type="email" disabled />
        <Space />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Senha atual"
          error={error ? 1 : 0}
        />
        <Input
          name="newPassword"
          type="password"
          placeholder="Digite uma nova senha"
          error={error ? 1 : 0}
        />
        <Input
          name="confirmation"
          type="password"
          placeholder="Confirma a nova senha"
          error={error ? 1 : 0}
        />
        <ButtonContainer>
          <SaveProfile type="submit">
            {loading ? (
              <Text>Carregando...</Text>
            ) : (
              <>
                <MeetupIcon>add_circle_outline</MeetupIcon>
                <Text>Salvar perfil</Text>
              </>
            )}
          </SaveProfile>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Profile;
