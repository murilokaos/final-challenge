import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import UserActions from 'store/ducks/user';
import history from 'services/history';

export function* userRegister({
  name, email, password, confirmation,
}) {
  try {
    const { data } = yield call('api.post', 'user', {
      name,
      email,
      password,
      password_confirmation: confirmation,
    });
    yield put(UserActions.userRegisterSuccess());
  } catch (error) {
    yield put(UserActions.userRegisterFailure('Erro ao cadastrar.'));
  }
}

export function* userLogin({ email, password }) {
  try {
    const { data } = yield call(api.post, 'signin', {
      email,
      password,
    });

    const { user, token } = data;

    localStorage.setItem('@Meetapp/TOKEN', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(UserActions.userLoginSuccess(user));

    history.push('/dashboard');
  } catch (error) {
    yield put(UserActions.userLoginFailure('Erro ao efetuar o login.'));
  }
}

export function userLogout() {
  localStorage.removeItem('@Meetapp/TOKEN');
  history.push('/');
}
