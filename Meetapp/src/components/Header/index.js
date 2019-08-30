import React from 'react';

import Logo from 'assets/img/logo.png';
import { Container, Brand } from './styles';

const Header = () => (
  <Container>
    <Brand source={Logo} />
  </Container>
);

export default Header;
