import React, { useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import {
  Container,
  Content,
  ButtonContainer,
  BannerPlaceholder,
  Text,
  SaveMeetup,
  MeetupIcon,
  Banner,
  FileUpload,
  Title,
  Description,
  DateTime,
  Address,
} from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const FormMeetup = () => {
  const [date, setDate] = useState();

  function handleChange(data) {
    setDate(data);
  }

  return (
    <Container>
      <Content>
        <Banner>
          <FileUpload name="banner" id="banner" />
          <BannerPlaceholder for="banner">
            <MeetupIcon fontSize="48">camera_alt</MeetupIcon>
            <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Selecionar imagem</Text>
          </BannerPlaceholder>
        </Banner>
        <Title name="title" placeholder="Titulo do Meetup" />
        <Description name="description" placeholder="Descriçao completa" />
        <DateTime>
          <ReactDatePicker
            name="date-time"
            id="date-time"
          // selected={this.state.startDate}
            onChange={handleChange}
            minDate={new Date()}
            value={date}
            withPortal
            placeholderText="Data do Meetup"
          />
        </DateTime>
        <Address name="location" placeholder="Localizaçao" />
        <ButtonContainer>
          <SaveMeetup>
            <MeetupIcon>add_circle_outline</MeetupIcon>
            <Text>Salvar Meetup</Text>
          </SaveMeetup>
        </ButtonContainer>
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
)(FormMeetup);
