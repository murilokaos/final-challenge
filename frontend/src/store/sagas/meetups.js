import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import MeetupsActions from 'store/ducks/meetups';
import history from 'services/history';
import Toast from 'services/utils/toast';
import Alert from 'services/utils/alert';

export function* loadMeetups() {
  try {
    const { data } = yield call(api.get, 'user/meetups');

    const { rows, count } = data;

    yield put(MeetupsActions.loadUserMeetupsSuccess(rows, count));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'error', title: data.error });
    yield put(MeetupsActions.loadUserMeetupsFailure());
  }
}

export function* deleteMeetup({ id }) {
  try {
    const alert = yield Alert({
      type: 'question',
      title: 'Deseja realmente cancelar este meetup?',
      text: 'Apos esta açao o meetup sera deletado.',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Nao cancelar meetup.',
      showCancelButton: true,
      showLoaderOnConfirm: true,
    });

    if (alert.value) {
      const { data } = yield call(api.delete, `meetup/${id}`);

      if (data.ok) {
        Toast({ type: 'success', title: data.msg });
        history.push('/dashboard');
        yield put(MeetupsActions.deleteUserMeetupSuccess(id));
      }
    }
  } catch (error) {
    yield put(MeetupsActions.deleteUserMeetupFailure());
  }
}

export function* registerMeetup({ data: dataMeetup }) {
  try {
    yield call(api.post, 'meetup', dataMeetup);
    Toast({ type: 'success', title: 'Meetup cadastrado com sucesso!' });
    yield put(MeetupsActions.registerMeetupSuccess());
    history.push('/dashboard');
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'error', title: data.error });
    yield put(MeetupsActions.registerMeetupFailure());
  }
}

export function* editMeetup({ id, data: dataMeetup }) {
  try {
    yield call(api.put, `meetup/${id}`, dataMeetup);
    Toast({ type: 'success', title: 'Meetup editado com sucesso!' });
    yield put(MeetupsActions.editMeetupSuccess());
    history.push('/dashboard');
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'error', title: data.error });
    yield put(MeetupsActions.editMeetupFailure());
  }
}
