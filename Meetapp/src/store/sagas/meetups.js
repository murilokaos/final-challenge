import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import MeetupsActions from 'store/ducks/meetups';
// import navigate from 'services/navigate';
import Toast from 'services/utils/toast';
// import Alert from 'services/utils/alert';

export function* loadMeetups() {
  try {
    const { data } = yield call(api.get, 'meetups');

    const { rows, count } = data;

    yield put(MeetupsActions.loadMeetupsSuccess(rows, count));
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'error', title: data.error });
    yield put(MeetupsActions.loadMeetupsFailure());
  }
}
