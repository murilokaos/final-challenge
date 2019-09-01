import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Background = ({ children }) => <Container>{children}</Container>;

Background.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Background;
