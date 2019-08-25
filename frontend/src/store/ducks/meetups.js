import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loadUserMeetupsRequest: null,
  loadUserMeetupsSuccess: ['meetups', 'totalMeetups'],
  loadUserMeetupsFailure: null,
});

export const MeetupsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  meetups: [],
  totalMeetups: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  // eslint-disable-next-line max-len
  [Types.LOAD_USER_MEETUPS_REQUEST]: (state) => state.merge({ loading: true }),
  [Types.LOAD_USER_MEETUPS_SUCCESS]: (state, { meetups, totalMeetups }) => state.merge({
    meetups, totalMeetups, loading: false, error: false,
  }),
  [Types.LOAD_USER_MEETUPS_FAILURE]: (state) => state.merge({
    error: true, loading: false, meetups: [], totalMeetups: 0,
  }),
});
