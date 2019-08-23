import {
  all, takeLatest, put, call, select,
} from 'redux-saga/effects';
import api from 'services/api';
// import { Types as userTypes, Creators as userActions } from '~/store/ducks/user';

function* rootSaga() {
  // yield all([takeLatest(userTypes.LOAD_USER_REQUEST, user)]);
}

export default rootSaga;
