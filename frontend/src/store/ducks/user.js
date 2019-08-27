import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  userLoginRequest: ['email', 'password'],
  userLoginSuccess: ['user', 'token'],
  userLoginFailure: null,
  userLogout: null,
  userRegisterRequest: ['name', 'email', 'password', 'confirmation'],
  userRegisterSuccess: null,
  userRegisterFailure: null,
  userEditProfileRequest: ['id', 'data'],
  userEditProfileSuccess: ['user'],
  userEditProfileFailure: null,
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  isLoggedIn: false,
  token: null,
  user: {},
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGIN_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.USER_LOGIN_SUCCESS]: (state, { user, token }) => state.merge({
    user,
    token,
    isLoggedIn: true,
    loading: false,
    error: false,
  }),
  [Types.USER_LOGIN_FAILURE]: (state) => state.merge({
    error: true,
    loading: false,
  }),
  [Types.USER_LOGOUT]: (state) => state.merge({ ...INITIAL_STATE }),
  [Types.USER_REGISTER_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.USER_REGISTER_SUCCESS]: (state) => state.merge({ loading: false, error: false }),
  [Types.USER_REGISTER_FAILURE]: (state) => state.merge({ error: true, loading: false }),
  [Types.USER_EDIT_PROFILE_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.USER_EDIT_PROFILE_SUCCESS]: (state, { user }) => state.merge({ user, loading: false, error: false }),
  [Types.USER_EDIT_PROFILE_FAILURE]: (state) => state.merge({ error: true, loading: false }),
});
