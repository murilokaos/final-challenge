import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import UserActions from 'store/ducks/user';
import history from 'services/history';
import Toast from 'services/utils/toast';

export function* userRegister({
  name, email, password, confirmation,
}) {
  try {
    yield call(api.post, 'user', {
      name,
      email,
      password,
      password_confirmation: confirmation,
    });
    yield put(UserActions.userRegisterSuccess());

    Toast({ type: 'success', title: 'Cadastro efetuado com sucesso, logue-se para continuar!' });
    history.push('/');
  } catch (err) {
    const { data } = err.response;
    Toast({ type: 'error', title: data.error });
    yield put(UserActions.userRegisterFailure());
    history.push('/register');
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

    yield put(UserActions.userLoginSuccess(user, token));

    Toast({ type: 'success', title: 'Login efetuado com sucesso!' });

    history.push('/dashboard');
  } catch (err) {
    const { error } = err.response.data;
    Toast({ type: 'error', title: error });
    yield put(UserActions.userLoginFailure());
    history.push('/');
  }
}

export function* userEdit({ id, data: newData }) {
  try {
    const { data } = yield call(api.put, `user/${id}`, newData);
    const { name, email } = data;
    yield put(UserActions.userEditProfileSuccess({ id, name, email }));
    Toast({ type: 'success', title: 'Usuario editado com sucesso!' });
    history.push('/');
  } catch (err) {
    const { error } = err.response.data;
    Toast({ type: 'error', title: error });
    yield put(UserActions.userEditProfileFailure());
  }
}

export function userLogout() {
  localStorage.removeItem('@Meetapp/TOKEN');
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.user;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
