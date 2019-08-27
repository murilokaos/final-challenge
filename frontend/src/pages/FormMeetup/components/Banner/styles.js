import styled from 'styled-components';
import { whiteTransparent } from 'services/utils/colors';
import { borderRadius, margin } from 'services/utils/metrics';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  border-radius: ${borderRadius}px;
  margin-bottom: ${margin * 2}px;
  background: rgba(0, 0, 0, 0.3);
  color: ${whiteTransparent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      cursor: not-allowed;
    }

    img {
      height: 300px;
      width: auto;
    }

    input {
      display: none;
    }
  }
`;
