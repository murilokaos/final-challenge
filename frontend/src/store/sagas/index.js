import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from 'store/ducks/user';
import { MeetupsTypes } from 'store/ducks/meetups';

import { userLogin, userRegister, userLogout } from './user';
import { loadMeetups } from './meetups';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_REGISTER_REQUEST, userRegister),
    takeLatest(UserTypes.USER_LOGOUT, userLogout),
    takeLatest(MeetupsTypes.LOAD_USER_MEETUPS_REQUEST, loadMeetups),
  ]);
}
