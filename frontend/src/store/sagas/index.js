import { all, takeLatest } from 'redux-saga/effects';

import { UserTypes } from 'store/ducks/user';

import { userLogin, userRegister, userLogout } from './user';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.USER_REGISTER_REQUEST, userRegister),
    takeLatest(UserTypes.USER_LOGOUT, userLogout),
  ]);
}
