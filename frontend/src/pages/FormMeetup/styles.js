import styled from 'styled-components';
import { FileInput, Input } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${margin}px;
`;

export const SaveMeetup = styled.button`
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

export const BannerPlaceholder = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
`;

export const FileUpload = styled(FileInput)`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
`;

export const Banner = styled.div`
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
`;

export const Title = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const Description = styled(Input).attrs({
  multiline: true,
})`
  width: 100%;
  height: 200px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;

export const DateTime = styled.label.attrs({
  for: 'date-time',
})`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  background: ${blackTransparent};
  
  & input {
    background: transparent;
    color: ${white};
    font-size: ${fontSize}px;
  }
`;

export const Address = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
`;
