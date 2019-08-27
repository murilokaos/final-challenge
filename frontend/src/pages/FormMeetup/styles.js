import styled from 'styled-components';
import { Input as UnInput, Form as UnForm } from '@rocketseat/unform';
import {
  primary,
  white,
  blackTransparent,
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

export const Form = styled(UnForm)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  height: 100%;
  padding: 0 ${padding}px;

  & span {
    color: ${white};
    margin-bottom: ${margin}px;
    border-left: 2px solid ${primary};
    margin-left: ${margin}px;
    padding: ${padding / 2}px;
    border-radius: ${borderRadius / 2}px;
    width: 100%;
    text-align: start;
  }
`;

export const Text = styled.strong`
  padding: 0 ${padding}px;
  font-size: ${secondFontSize}px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: ${margin}px 0;
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

export const Input = styled(UnInput)`
  width: 100%;
  height: ${(props) => (props.multiline ? '200px' : '50px')};;
  padding: ${padding}px ${padding}px;
  margin-bottom: ${margin}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  color: ${white};
  background: ${blackTransparent};
  line-height: ${lineHeight}px;
  resize: ${(props) => (props.multiline ? 'none' : undefined)};
  border: ${(props) => (props.error ? `1px solid ${primary}` : 'none')};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const DateTime = styled.label.attrs({
  htmlFor: 'date-time',
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
    width: 100%;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;
