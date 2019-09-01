import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  white,
  dark,
  whiteTransparent,
  blackTransparent,
  light,
  darkPrimary,
  primary,
} from 'services/utils/colors';
import {
  borderRadius,
  lineHeight,
  fontSize,
  padding,
  thirdFontSize,
  margin,
} from 'services/utils/metrics';

import Button from 'components/Button';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  /* height: 345px; */
  width: 100%;
  background-color: ${white};
  border-radius: ${borderRadius}px;
  margin-bottom: ${margin * 3}px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  height: 150px;
  min-width: 100%;
`;

export const Content = styled.View`
  padding: ${padding * 2}px ${padding * 2}px;
`;

export const Title = styled.Text`
  line-height: ${lineHeight}px;
  color: ${dark};
  font-size: ${fontSize}px;
  font-weight: bold;
  margin-bottom: ${margin}px;
`;

export const Line = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: ${margin / 1.5}px;
`;

export const Information = styled.Text`
  font-size: ${thirdFontSize}px;
  color: ${light};
`;

export const MiniIcon = styled(Icon)`
  color: ${light};
  font-size: ${thirdFontSize + 1}px;
  margin-right: ${margin / 2}px;
`;

export const Action = styled(Button)`
  margin-top: ${margin / 1.5}px;
  background-color: ${props => (props.dark ? darkPrimary : primary)};
`;
