import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isPast, parseISO } from 'date-fns';
import * as Yup from 'yup';
import MeetupsActions from 'store/ducks/meetups';
import DatePicker from './components/DatePicker';
import BannerInput from './components/Banner';
import {
  Container,
  ButtonContainer,
  BannerPlaceholder,
  Form,
  Input,
  Text,
  SaveMeetup,
  MeetupIcon,
  DateTime,
} from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const FormMeetup = ({ match }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const { id } = match.params;
  const meetup = useSelector((state) => state.meetups.meetups.find(
    (meetupItem) => Number(meetupItem.id) === Number(id),
  ));

  const isOutdated = !!meetup && isPast(parseISO(meetup.date));

  const schema = Yup.object().shape({
    banner: Yup.string(),
    title: Yup.string().required('É necessário definir um título para o Meetup.'),
    description: Yup.string().min(55, 'A descrição deve ter no mínimo 55 dígitos.').required('É necessário definir uma descrição.'),
    date: Yup.date().nullable().required('É necessário definir uma data.'),
    location: Yup.string().required('É necessário definir uma localização.'),
  });

  function handleSubmit(data) {
    if (!id) {
      dispatch(MeetupsActions.registerMeetupRequest(data));
    } else {
      dispatch(MeetupsActions.editMeetupRequest(id, data));
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput
          label={(
            <BannerPlaceholder htmlFor="banner" disabled={isOutdated}>
              <MeetupIcon fontSize="48">camera_alt</MeetupIcon>
              <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Selecionar imagem
              </Text>
            </BannerPlaceholder>
          )}
          name="banner"
          disabled={isOutdated}
        />
        <Input name="title" placeholder="Titulo do Meetup" disabled={isOutdated} error={error ? 1 : 0} />
        <Input name="description" placeholder="Descriçao completa" multiline error={error ? 1 : 0} disabled={isOutdated} />
        <DateTime>
          <DatePicker name="date" isOutdated={isOutdated} />
        </DateTime>
        <Input name="location" placeholder="Localizaçao" error={error ? 1 : 0} disabled={isOutdated} />
        <ButtonContainer>
          <SaveMeetup disabled={isOutdated}>
            <MeetupIcon>add_circle_outline</MeetupIcon>
            <Text>Salvar Meetup</Text>
          </SaveMeetup>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

FormMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FormMeetup;
