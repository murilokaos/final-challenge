import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// export const Types = {
//   LOGIN_USER_REQUEST: 'user/login_request',
//   LOGIN_USER_SUCCESS: 'user/login_success',
//   LOGIN_USER_FAILURE: 'user/login_failure',
//   LOGOUT_USER_REQUEST: 'user/logout_request',
//   LOGOUT_USER_SUCCESS: 'user/logout_success',
//   LOGOUT_USER_FAILURE: 'user/logout_failure',
//   UPDATE_USER_REQUEST: 'user/update_request',
//   UPDATE_USER_SUCCESS: 'user/update_success',
//   UPDATE_USER_FAILURE: 'user/update_failure',
// };

const { Types, Creators } = createActions({
  userLoginRequest: ['email', 'password'],
  userLoginSuccess: ['user'],
  userLoginFailure: ['error'],
  userLogout: null,
  userRegisterRequest: ['name', 'email', 'password', 'confirmation'],
  userRegisterSuccess: null,
  userRegisterFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  isLoggedIn: false,
  user: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  // eslint-disable-next-line max-len
  [Types.USER_LOGIN_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.USER_LOGIN_SUCCESS]: (state, { user }) => state.merge({
    user, isLoggedIn: true, loading: false, error: false,
  }),
  [Types.USER_LOGIN_FAILURE]: (state) => state.merge({
    error: true, loading: false, user: [], isLoggedIn: false,
  }),
  [Types.USER_LOGOUT]: (state) => state.merge({ ...INITIAL_STATE }),
  [Types.USER_REGISTER_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.USER_REGISTER_SUCCESS]: (state) => state.merge({ loading: false, error: false }),
  [Types.USER_REGISTER_FAILURE]: (state) => state.merge({ error: true, loading: false }),
});
