import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from 'store/ducks/user';
import { MeetupsTypes } from 'store/ducks/meetups';

import {
  userLogin,
  userRegister,
  userEdit,
  userLogout,
  setToken,
} from './user';

import { loadMeetups } from './meetups';

export default function* rootSaga() {
  return yield all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_REGISTER_REQUEST, userRegister),
    takeLatest(UserTypes.USER_EDIT_PROFILE_REQUEST, userEdit),
    takeLatest(UserTypes.USER_LOGOUT, userLogout),
    takeLatest(MeetupsTypes.LOAD_MEETUPS_REQUEST, loadMeetups),
  ]);
}
