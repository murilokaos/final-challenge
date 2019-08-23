import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formatBrDate } from 'services/utils/helpers';

import {
  Banner,
  ButtonsContainer,
  Container,
  Content,
  DeleteMeetup,
  Description,
  EditMeetup,
  Header,
  MeetupIcon,
  Title,
  Text,
  BoxInformation,
  DateTime,
  Address,
} from './styles';

const Meetup = () => (
  <Container>
    <Content>
      <Header>
        <Title>Meetup de React Native</Title>
        <ButtonsContainer>
          <EditMeetup to="/meetup/1">
            <MeetupIcon>edit</MeetupIcon>
            <Text>Editar</Text>
          </EditMeetup>
          <DeleteMeetup>
            <MeetupIcon>delete_forever</MeetupIcon>
            <Text>Cancelar</Text>
          </DeleteMeetup>
        </ButtonsContainer>
      </Header>
      <Banner />
      <Description>
        O Meetup de React Native é um evento que reúne a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados.

        Caso queira participar como palestrante do meetup envie um e-mail para
        organizacao@meetuprn.com.br.
      </Description>
      <BoxInformation>
        <DateTime>
          <MeetupIcon>event</MeetupIcon>
          <Text>{formatBrDate('2019-08-22 21:00:00+00')}</Text>
        </DateTime>
        <Address>
          <MeetupIcon>place</MeetupIcon>
          <Text>Rua Guilherme Gembala, 260</Text>
        </Address>
      </BoxInformation>
    </Content>
  </Container>
);

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Meetup);
