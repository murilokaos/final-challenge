import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isPast, parseISO } from 'date-fns';
import { formatBrDate } from 'services/utils/helpers';
import MeetupsActions from 'store/ducks/meetups';

import {
  Banner,
  ButtonsContainer,
  Button,
  Container,
  Content,
  Description,
  Header,
  MeetupIcon,
  Title,
  Text,
  BoxInformation,
  DateTime,
  Address,
} from './styles';

const Meetup = ({ match, history }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const meetup = useSelector(
    (state) => state.meetups.meetups.filter((item) => Number(item.id) === Number(id))[0],
  );

  if (!meetup) {
    return <Redirect to="/dashboard" />;
  }

  function deleteMeetup() {
    dispatch(MeetupsActions.deleteUserMeetupRequest(meetup.id));
  }

  const isOutdated = isPast(parseISO(meetup.date));

  return (
    <Container>
      <Content>
        <Header>
          <Title>{meetup.title}</Title>
          <ButtonsContainer>
            <Button
              edit
              disabled={isOutdated}
              onClick={
                !isOutdated
                  ? () => history.push(`/meetup/${meetup.id}`)
                  : undefined
              }
            >
              <MeetupIcon>edit</MeetupIcon>
              <Text>Editar</Text>
            </Button>
            <Button delete disabled={isOutdated} onClick={deleteMeetup}>
              <MeetupIcon>delete_forever</MeetupIcon>
              <Text>Cancelar</Text>
            </Button>
          </ButtonsContainer>
        </Header>
        <Banner src={`http://localhost:3333/file/${meetup.banner}`} />
        <Description>{meetup.description}</Description>
        <BoxInformation>
          <DateTime>
            <MeetupIcon>event</MeetupIcon>
            <Text isPast={isOutdated}>{formatBrDate(meetup.date)}</Text>
          </DateTime>
          <Address>
            <MeetupIcon>place</MeetupIcon>
            <Text>{meetup.location}</Text>
          </Address>
        </BoxInformation>
      </Content>
    </Container>
  );
};

Meetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Meetup;
