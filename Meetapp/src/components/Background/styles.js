import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
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
