import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

const Dashboard = ({ meetups, totalMeetups, ...props }) => {
  useEffect(() => {
    const { loadUserMeetupsRequest } = props;
    loadUserMeetupsRequest();
  }, []);

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
          {totalMeetups > 0 ? meetups.map((meetup) => (
            <Meetup key={meetup.id} to={`/meetup/${meetup.id}/preview`}>
              <MeetupTitle>{meetup.title}</MeetupTitle>
              <MeetupInfoControls>
                <MeetupDate>{formatBrDate(meetup.date)}</MeetupDate>
                <MeetupAction>
                  <MeetupIcon>chevron_right</MeetupIcon>
                </MeetupAction>
              </MeetupInfoControls>
            </Meetup>
          )) : <MeetupTitle>Voce nao possui meetups cadastrados!</MeetupTitle>}
        </MeetupsContainer>
      </Content>
    </Container>
  );
};

Dashboard.propTypes = {
  meetups: PropTypes.arrayOf([PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    banner: PropTypes.string,
  })]).isRequired,
  totalMeetups: PropTypes.number.isRequired,
  loadUserMeetupsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, meetups }) => ({
  user: user.user,
  meetups: meetups.meetups,
  totalMeetups: meetups.totalMeetups,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
