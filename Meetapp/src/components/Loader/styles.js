import styled from 'styled-components/native';
import { primary } from 'services/utils/colors';
import { fontSize } from 'services/utils/metrics';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: primary,
  size: fontSize * 3,
})``;
