import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  primary, white, blackTransparent, whiteTransparent,
} from 'services/utils/colors';
import {
  secondFontSize, margin, padding, borderRadius, fontSize,
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

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: ${margin * 2}px 0;
  padding: ${padding * 2}px 0;
`;

export const Title = styled.h1`
  color: ${white};
  font-size: 32px;
`;

export const NewMeetup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${primary};
  font-size: ${secondFontSize}px;
  font-weight: bold;
  color: ${white};
  border-radius: ${borderRadius}px;
  padding: ${padding}px ${padding * 2}px;
`;

export const NewMeetupText = styled.span`
  padding: 0 ${padding}px;
`;

export const MeetupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Meetup = styled.button`
  height: 62px;
  background: ${blackTransparent};
  padding: ${padding}px ${padding * 2}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${borderRadius}px;
  width: 100%;
  margin: ${margin / 2}px 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const MeetupTitle = styled.h3`
  color: ${white};
  font-size: ${fontSize}px;
`;

export const MeetupInfoControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const MeetupDate = styled.time`
  color: ${whiteTransparent};
  font-size: ${secondFontSize}px;
  text-decoration: ${(props) => (props.isPast ? 'line-through' : 'none')};
`;

export const MeetupAction = styled.div`
  color: ${white};
  margin: ${margin}px;
  display: flex;
  align-items: center;
`;

export const MeetupIcon = styled.i.attrs({
  className: 'material-icons',
})``;
