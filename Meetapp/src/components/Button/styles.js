import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 45px;
  background: #f94d6a;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
