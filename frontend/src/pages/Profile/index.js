import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  Content,
  Text,
  SaveProfile,
  ButtonContainer,
  MeetupIcon,
  Space,
  Name,
  Email,
  Password,
  NewPassword,
  ConfirmationPassword,
} from './styles';

const Profile = () => (
  <Container>
    <Content>
      <Name name="name" placeholder="Digite seu nome" />
      <Email name="email" type="email" value="diego@rocketseat.com.br" />
      <Space />
      <Password name="password" type="password" placeholder="Senha atual" />
      <NewPassword name="password" type="password" placeholder="Digite uma nova senha" />
      <ConfirmationPassword name="password" type="password" placeholder="Confirma a nova senha" />
      <ButtonContainer>
        <SaveProfile>
          <MeetupIcon>add_circle_outline</MeetupIcon>
          <Text>Salvar perfil</Text>
        </SaveProfile>
      </ButtonContainer>
    </Content>
  </Container>
);

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Profile);
