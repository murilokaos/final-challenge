import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserActions from 'store/ducks/user';

import {
  Container,
  Content,
  MenuSection,
  User,
  Username,
  Brand,
  Logout,
  PerfilLink,
} from './styles';

const Header = ({ user, userLogout }) => (
  <Container>
    <Content>
      <Link to="/">
        <Brand />
      </Link>
      <MenuSection>
        <User>
          <Username>{user.name}</Username>
          <PerfilLink to="/profile">Meu Perfil</PerfilLink>
        </User>
        <Logout onClick={userLogout}>Sair</Logout>
      </MenuSection>
    </Content>
  </Container>
);

const mapStateToProps = ({ user }) => ({
  user: user.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
