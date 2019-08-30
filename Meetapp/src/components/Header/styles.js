import styled from 'styled-components/native';
import { secondary } from 'services/utils/colors';

export const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  background-color: ${secondary};
  height: 64px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Brand = styled.Image`
  width: 24px;
  height: 24px;
`;
