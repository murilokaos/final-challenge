import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container, Content, MenuSection, User, Username, Brand, Logout, PerfilLink,
} from './styles';

const Header = () => (
  <Container>
    <Content>
      <Link to="/"><Brand /></Link>
      <MenuSection>
        <User>
          <Username>Murilo Henrique</Username>
          <PerfilLink to="/profile">Meu Perfil</PerfilLink>
        </User>
        <Logout>Sair</Logout>
      </MenuSection>
    </Content>

  </Container>
);

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
