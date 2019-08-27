import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isPast, parseISO } from 'date-fns';
import { formatBrDate } from 'services/utils/helpers';
import MeetupsActions from 'store/ducks/meetups';

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

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const meetups = useSelector((state) => state.meetups.meetups);
  const totalMeetups = useSelector((state) => state.meetups.totalMeetups);

  useEffect(() => {
    dispatch(MeetupsActions.loadUserMeetupsRequest());
  }, []); // eslint-disable-line

  return (
    <Container>
      <Content>
        <Header>
          <Title>Meus meetups</Title>
          <NewMeetup to="/meetup">
            <MeetupIcon>add_circle_outline</MeetupIcon>
            <NewMeetupText>Novo meetup</NewMeetupText>
          </NewMeetup>
        </Header>
        <MeetupsContainer>
          {totalMeetups > 0 ? (
            meetups.map((meetup) => {
              const isOutdated = isPast(parseISO(meetup.date));
              return (
                <Meetup key={meetup.id} disabled={isOutdated} onClick={!isOutdated ? () => history.push(`/meetup/${meetup.id}/preview`) : () => {}}>
                  <MeetupTitle>{meetup.title}</MeetupTitle>
                  <MeetupInfoControls>
                    <MeetupDate isPast={isOutdated}>{formatBrDate(meetup.date)}</MeetupDate>
                    <MeetupAction>
                      <MeetupIcon>chevron_right</MeetupIcon>
                    </MeetupAction>
                  </MeetupInfoControls>
                </Meetup>
              );
            })
          ) : (
            <MeetupTitle>Você não possui meetups cadastrados!</MeetupTitle>
          )}
        </MeetupsContainer>
      </Content>
    </Container>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Dashboard;
