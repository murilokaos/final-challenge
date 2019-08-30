import styled from 'styled-components/native';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Input from 'components/Input';
import Button from 'components/Button';

export const Background = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.0 },
  end: { x: 0.0, y: 1.0 },
  locations: [0, 1],
  colors: ['#22202C', '#402845'],
  useAngle: true,
  angle: 180,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const Brand = styled.Image`
  width: 42px;
  height: 42px;
  margin: 15px auto;
  margin-bottom: 50px;
`;

export const FormInput = styled(Input)`
  padding-left: 15px;
  margin-bottom: 10px;
`;

export const Submit = styled(Button)`
  margin-top: 10px;
`;

export const LinkSign = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LinkSignText = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
`;
