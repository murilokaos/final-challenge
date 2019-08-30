import styled from 'styled-components/native';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  primaryGradient,
  secondaryGradient,
  whiteTransparent,
} from 'services/utils/colors';
import { margin } from 'services/utils/metrics';

import Input from 'components/Input';
import Button from 'components/Button';

export const Background = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 0.0, y: 1.0 },
  locations: [0, 1],
  colors: [primaryGradient, secondaryGradient],
  useAngle: true,
  angle: 180,
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'always',
  keyboardDismissMode: 'on-drag',
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  padding-left: 15px;
  margin-bottom: 10px;
`;

export const Submit = styled(Button)`
  margin-top: 10px;
`;

export const Spacer = styled.View`
  height: 1px;
  background: ${whiteTransparent};
  margin-top: ${margin * 2}px;
  margin-bottom: ${margin * 3}px;
`;
