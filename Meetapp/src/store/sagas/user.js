import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import AsyncStorage from '@react-native-community/async-storage';
import UserActions from 'store/ducks/user';
import navigate from 'services/navigate';
import Toast from 'services/utils/toast';

export function* userRegister({ name, email, password, confirmation }) {
  try {
    yield call(api.post, 'user', {
      name,
      email,
      password,
      password_confirmation: confirmation,
    });

    yield put(UserActions.userRegisterSuccess());

    Toast({
      type: 'Success',
      title: 'Cadastro efetuado com sucesso, logue-se para continuar!',
    });
    navigate('SignIn');
  } catch (err) {
    Toast({ type: 'Error', title: 'Ocorreu um erro, verifique seus dados.' });
    yield put(UserActions.userRegisterFailure());
  }
}

export function* userLogin({ email, password }) {
  try {
    const { data } = yield call(api.post, 'signin', {
      email,
      password,
    });

    const { user, token } = data;

    AsyncStorage.setItem('@Meetapp/TOKEN', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(UserActions.userLoginSuccess(user, token));

    Toast({ type: 'Success', title: 'Login efetuado com sucesso!' });
  } catch (err) {
    const { error } = err.response.data;
    Toast({ type: 'Error', title: error });
    yield put(UserActions.userLoginFailure());
  }
}

export function* userEdit({ id, data: newData }) {
  try {
    const { data } = yield call(api.put, `user/${id}`, newData);
    const { name, email } = data;
    yield put(UserActions.userEditProfileSuccess({ id, name, email }));
    Toast({ type: 'Success', title: 'Usuario editado com sucesso!' });
  } catch (err) {
    const { error } = err.response.data;
    Toast({ type: 'Error', title: error });
    yield put(UserActions.userEditProfileFailure());
  }
}

export function userLogout() {
  AsyncStorage.removeItem('@Meetapp/TOKEN');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.user;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
