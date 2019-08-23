import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatBrDate } from 'services/utils/helpers';

import {
  Container,
  Content,
  Header,
  Meetup,
  MeetupAction,
  MeetupsContainer,
  MeetupDate,
  MeetupIcon,
  MeetupInfoControls,
  MeetupTitle,
  NewMeetup,
  NewMeetupText,
  Title,
} from './styles';

const Dashboard = () => {
  const meus_meetups = [
    {
      id: 1,
      title: 'Meetup de React Native',
      date: '2019-08-22 23:00:00+00',
    },
    {
      id: 2,
      title: 'Meetup de ReactJS com ExpressJS',
      date: '2019-08-22 21:00:00+00',
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>Meus meetups</Title>
          <NewMeetup>
            <MeetupIcon>add_circle_outline</MeetupIcon>
            <NewMeetupText>Novo meetup</NewMeetupText>
          </NewMeetup>
        </Header>
        <MeetupsContainer>
          {meus_meetups.map((meetup) => (
            <Meetup to={`/meetup/${meetup.id}/preview`}>
              <MeetupTitle>{meetup.title}</MeetupTitle>
              <MeetupInfoControls>
                <MeetupDate>{formatBrDate(meetup.date)}</MeetupDate>
                <MeetupAction>
                  <MeetupIcon>chevron_right</MeetupIcon>
                </MeetupAction>
              </MeetupInfoControls>
            </Meetup>
          ))}
        </MeetupsContainer>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Dashboard);
