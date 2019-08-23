import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darkPrimary, white, whiteTransparent } from 'services/utils/colors';
import {
  padding, secondFontSize, borderRadius, margin,
} from 'services/utils/metrics';
import logo from 'assets/img/logo.svg';

export const Container = styled.div`
  height: 90px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${margin * 2}px;
`;

export const Content = styled.div`
  max-width: 960px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: 'nowrap';
  padding: 0 ${padding}px;
`;

export const Brand = styled.img.attrs({
  src: logo,
})`
  height: 42px;
  width: 41px;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: ${padding * 2}px;
`;

export const Username = styled.span`
  font-weight: bold;
  color: ${white};
`;

export const PerfilLink = styled(Link)`
  color: ${whiteTransparent};
`;

export const Logout = styled.button`
  background: ${darkPrimary};
  color: ${white};
  font-weight: bold;
  font-size: ${secondFontSize}px;
  padding: ${padding}px ${padding * 2}px;
  border-radius: ${borderRadius}px;
`;
