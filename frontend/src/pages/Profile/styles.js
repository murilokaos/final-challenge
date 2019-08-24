import styled from 'styled-components';
import { Input } from '@rocketseat/unform';
import {
  primary,
  secondary,
  white,
  blackTransparent,
  whiteTransparent,
} from 'services/utils/colors';
import {
  secondFontSize,
  margin,
  padding,
  borderRadius,
  fontSize,
  lineHeight,
} from 'services/utils/metrics';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  max-width: 960px;
  height: 100vh;
  padding: 0 ${padding}px;
`;

export const Text = styled.span`
  padding: 0 ${padding}px;
  font-size: ${secondFontSize}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${margin}px;
`;

export const SaveProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${primary};
  font-size: ${secondFontSize}px;
  font-weight: bold;
  color: ${white};
  border-radius: ${borderRadius}px;
  padding: ${padding}px ${padding * 2}px;
  margin-left: ${margin - 2}px;
`;

export const MeetupIcon = styled.i.attrs({
  className: 'material-icons',
})`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px !important` : undefined)};
`;

export const Name = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const Email = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const Password = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const NewPassword = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const ConfirmationPassword = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const Space = styled.hr`
  background: rgba(255, 255, 255, 0.1);
  height: 1px;
  width: 100%;
  margin-bottom: ${margin * 2}px;
  margin-top: ${margin}px;
`;
