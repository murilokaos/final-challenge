import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  primary, secondary, white, whiteTransparent,
} from 'services/utils/colors';
import {
  secondFontSize, margin, padding, borderRadius, fontSize, lineHeight,
} from 'services/utils/metrics';
import bannerImg from 'assets/img/banner.jpg';

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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const EditMeetup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${secondary};
  font-size: ${secondFontSize}px;
  font-weight: bold;
  color: ${white};
  border-radius: ${borderRadius}px;
  padding: ${padding}px ${padding * 2}px;
  margin-right: ${margin - 2}px;
`;

export const Text = styled.span`
  padding: 0 ${padding}px;
  font-size: ${secondFontSize}px;
`;

export const DeleteMeetup = styled.button`
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
  color: ${white};
`;

export const Banner = styled.img.attrs({
  src: bannerImg,
})`
  width: 100%;
  max-height: 300px;
  border-radius: ${borderRadius}px;
  margin-bottom: ${margin * 2}px;
`;

export const Description = styled.p`
  font-size: ${fontSize}px;
  color: ${white};
  line-height: ${lineHeight + 11}px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const BoxInformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${margin * 2}px;
`;

export const DateTime = styled.time`
  color: ${whiteTransparent};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Address = styled.address`
  color: ${whiteTransparent};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
