import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import MeetupsActions from 'store/ducks/meetups';
// import history from 'services/history';
import Toast from 'services/utils/toast';

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
