import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Form as UnForm, Input as UnInput } from '@rocketseat/unform';
import {
  blackTransparent, whiteTransparent, primary, white,
} from 'services/utils/colors';
import {
  fontSize, borderRadius, margin, padding, lineHeight, secondFontSize,
} from 'services/utils/metrics';
import logo from 'assets/img/logo.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Brand = styled.img.attrs({
  src: logo,
  alt: 'Logo do Meetapp',
  title: 'Meetapp - o melhor app pra você que ama participar de meetups',
})`
  width: 41px;
  height: 42px;
  margin-bottom: 50px;
`;

export const Form = styled(UnForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 315px;
`;

export const Input = styled(UnInput)`
  color: ${whiteTransparent};
  background-color: ${blackTransparent};
  height: 50px;
  width: 100%;
  border-radius: ${borderRadius}px;
  line-height: ${lineHeight}px;
  margin-bottom: ${margin}px;
  font-size: ${fontSize}px;
  padding-left: ${padding * 2}px;
`;

export const Button = styled.button`
  color: ${white};
  background: ${primary};
  height: 50px;
  width: 100%;
  font-size: ${secondFontSize}px;
  border-radius: ${borderRadius}px;
  font-weight: bold;
`;

export const Link = styled(RouterLink)`
  color: ${whiteTransparent};
  font-size: ${secondFontSize}px;
  font-weight: bold;
  padding: ${padding}px;
  text-decoration: none;
`;

export const Error = styled.span`
  color: red;
`;
